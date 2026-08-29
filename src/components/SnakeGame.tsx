import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, RotateCcw, Award, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const GRID_ROWS = 14;
const GRID_COLS = 32;

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

export const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<Position[]>([
    { x: 10, y: 7 },
    { x: 9, y: 7 },
    { x: 8, y: 7 },
  ]);
  const [food, setFood] = useState<Position>({ x: 20, y: 7 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(() => {
    return parseInt(localStorage.getItem('alok_snake_high_score') || '0', 10);
  });
  const [gameOver, setGameOver] = useState<boolean>(false);

  const directionRef = useRef<Direction>('RIGHT');
  directionRef.current = direction;

  // Generate random food position
  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_COLS),
        y: Math.floor(Math.random() * GRID_ROWS),
      };
      // Check if food is inside snake body
      const onSnake = currentSnake.some(
        segment => segment.x === newFood.x && segment.y === newFood.y
      );
      if (!onSnake) break;
    }
    return newFood;
  }, []);

  const resetGame = () => {
    const initialSnake: Position[] = [
      { x: 10, y: 7 },
      { x: 9, y: 7 },
      { x: 8, y: 7 },
    ];
    setSnake(initialSnake);
    setDirection('RIGHT');
    directionRef.current = 'RIGHT';
    setFood(generateFood(initialSnake));
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying || gameOver) return;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (directionRef.current !== 'DOWN') setDirection('UP');
          e.preventDefault();
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (directionRef.current !== 'UP') setDirection('DOWN');
          e.preventDefault();
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (directionRef.current !== 'RIGHT') setDirection('LEFT');
          e.preventDefault();
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (directionRef.current !== 'LEFT') setDirection('RIGHT');
          e.preventDefault();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, gameOver]);

  // Game tick loop
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const interval = setInterval(() => {
      setSnake(prevSnake => {
        const head = { ...prevSnake[0] };
        const currentDir = directionRef.current;

        if (currentDir === 'UP') head.y -= 1;
        if (currentDir === 'DOWN') head.y += 1;
        if (currentDir === 'LEFT') head.x -= 1;
        if (currentDir === 'RIGHT') head.x += 1;

        // Wrap around borders like GitHub activity matrix
        if (head.x < 0) head.x = GRID_COLS - 1;
        if (head.x >= GRID_COLS) head.x = 0;
        if (head.y < 0) head.y = GRID_ROWS - 1;
        if (head.y >= GRID_ROWS) head.y = 0;

        // Self collision check
        const selfHit = prevSnake.slice(1).some(
          segment => segment.x === head.x && segment.y === head.y
        );

        if (selfHit) {
          setGameOver(true);
          setIsPlaying(false);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        // Eat food check
        if (head.x === food.x && head.y === food.y) {
          const nextScore = score + 10;
          setScore(nextScore);
          if (nextScore > highScore) {
            setHighScore(nextScore);
            localStorage.setItem('alok_snake_high_score', nextScore.toString());
          }
          if (nextScore % 50 === 0) {
            confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
          }
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 110);

    return () => clearInterval(interval);
  }, [isPlaying, gameOver, food, score, highScore, generateFood]);

  return (
    <div className="bg-[#090d13] p-4 rounded-xl border border-slate-800 flex flex-col items-center">
      
      {/* Game status bar */}
      <div className="w-full flex items-center justify-between mb-3 text-xs font-mono">
        <div className="flex items-center gap-4">
          <span className="text-pink-400 font-bold">Score: {score}</span>
          <span className="text-slate-400 flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-yellow-400" />
            <span>High: {highScore}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {!isPlaying && !gameOver && (
            <button
              onClick={resetGame}
              className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded font-sans font-semibold flex items-center gap-1 hover:brightness-110"
            >
              <Play className="w-3 h-3" />
              <span>Start Game</span>
            </button>
          )}

          {(isPlaying || gameOver) && (
            <button
              onClick={resetGame}
              className="px-2.5 py-1 bg-slate-800 text-slate-200 hover:text-white rounded border border-slate-700 font-sans flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restart</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid Canvas */}
      <div 
        className="relative bg-[#0d1117] p-2 rounded-lg border border-slate-800 shadow-inner grid gap-[3px]"
        style={{
          gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))`
        }}
      >
        {Array.from({ length: GRID_ROWS }).map((_, rIdx) =>
          Array.from({ length: GRID_COLS }).map((_, cIdx) => {
            const isHead = snake[0].x === cIdx && snake[0].y === rIdx;
            const isBody = snake.slice(1).some(seg => seg.x === cIdx && seg.y === rIdx);
            const isFoodCell = food.x === cIdx && food.y === rIdx;

            let cellClass = 'w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[2px] transition-colors ';
            if (isHead) {
              cellClass += 'bg-pink-400 shadow-sm shadow-pink-500';
            } else if (isBody) {
              cellClass += 'bg-purple-500/80';
            } else if (isFoodCell) {
              cellClass += 'bg-emerald-400 animate-pulse';
            } else {
              cellClass += 'bg-slate-800/40 hover:bg-slate-800/70';
            }

            return (
              <div key={`${rIdx}-${cIdx}`} className={cellClass} />
            );
          })
        )}

        {gameOver && (
          <div className="absolute inset-0 bg-[#0d1117]/85 backdrop-blur-xs flex flex-col items-center justify-center rounded-lg">
            <span className="text-rose-400 font-bold text-base mb-1 font-mono">GAME OVER</span>
            <span className="text-xs text-slate-300 mb-3">Final Contribution Score: {score}</span>
            <button
              onClick={resetGame}
              className="px-4 py-1.5 bg-pink-500 text-white rounded-lg text-xs font-semibold hover:bg-pink-600"
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      {/* Mobile controls */}
      <div className="mt-3 flex flex-col items-center gap-1.5 sm:hidden">
        <button
          onClick={() => { if (directionRef.current !== 'DOWN') setDirection('UP'); }}
          className="p-2 bg-slate-800 text-slate-200 rounded border border-slate-700 active:bg-pink-500"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => { if (directionRef.current !== 'RIGHT') setDirection('LEFT'); }}
            className="p-2 bg-slate-800 text-slate-200 rounded border border-slate-700 active:bg-pink-500"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => { if (directionRef.current !== 'UP') setDirection('DOWN'); }}
            className="p-2 bg-slate-800 text-slate-200 rounded border border-slate-700 active:bg-pink-500"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            onClick={() => { if (directionRef.current !== 'LEFT') setDirection('RIGHT'); }}
            className="p-2 bg-slate-800 text-slate-200 rounded border border-slate-700 active:bg-pink-500"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-2 text-[11px] text-slate-500 text-center font-mono">
        Use Arrow keys or WASD to guide the snake eat contributions!
      </div>
    </div>
  );
};
