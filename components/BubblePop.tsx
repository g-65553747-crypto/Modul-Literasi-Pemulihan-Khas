import React, { useRef, useEffect, useState } from 'react';
import { SYLLABLE_DATA, KVKV_WORDS, VKV_WORDS, KVKVKV_WORDS } from '../constants';
import { speak } from '../services/audioService';
import { GameCategory } from '../types';

interface Bubble {
  id: number;
  x: number;
  y: number;
  text: string;
  speed: number;
  color: string;
  popped: boolean;
}

interface BubblePopProps {
    onScoreUpdate: (score: number) => void;
    category: GameCategory;
}

const BubblePop: React.FC<BubblePopProps> = ({ onScoreUpdate, category }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [target, setTarget] = useState<string>('');
  const [score, setScore] = useState(0);
  const bubblesRef = useRef<Bubble[]>([]);
  const requestRef = useRef<number>(0);
  const frameCountRef = useRef(0);
  const targetRef = useRef<string>(''); // Ref to access inside loop

  const colors = ['#FFC1CC', '#C1E1FF', '#C1FFD7', '#FFFBC1', '#E0C1FF'];

  const getPool = () => {
      if (category === 'KV') {
          return SYLLABLE_DATA.flatMap(g => g.items);
      } else if (category === 'VKV') {
          return VKV_WORDS.map(w => w.word);
      } else if (category === 'KVKVKV') {
          return KVKVKV_WORDS.map(w => w.word);
      } else {
          return KVKV_WORDS.map(w => w.word);
      }
  };

  const spawnBubble = (width: number, forcedText?: string) => {
     const pool = getPool();
     const text = forcedText || pool[Math.floor(Math.random() * pool.length)];
     
     const bubble: Bubble = {
         id: Date.now() + Math.random(),
         x: Math.random() * (width - 60) + 30,
         y: -50,
         text: text,
         speed: Math.random() * 1.5 + 1,
         color: colors[Math.floor(Math.random() * colors.length)],
         popped: false
     };
     bubblesRef.current.push(bubble);
  };

  const setNewTarget = () => {
      const pool = getPool();
      const newTarget = pool[Math.floor(Math.random() * pool.length)];
      setTarget(newTarget);
      targetRef.current = newTarget;
      speak(`Pop ${newTarget}`);
  };

  // Reset when category changes
  useEffect(() => {
      bubblesRef.current = [];
      setScore(0);
      setNewTarget();
  }, [category]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize handling
    const resize = () => {
        canvas.width = canvas.parentElement?.clientWidth || 300;
        canvas.height = canvas.parentElement?.clientHeight || 500;
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        frameCountRef.current++;

        // Spawn bubbles
        if (frameCountRef.current % 60 === 0) {
            // 30% chance to spawn target if not many exist
            const hasTarget = bubblesRef.current.some(b => b.text === targetRef.current);
            if (!hasTarget || Math.random() > 0.7) {
                spawnBubble(canvas.width, targetRef.current);
            } else {
                spawnBubble(canvas.width);
            }
        }

        // Update and Draw
        bubblesRef.current.forEach(b => {
            if (b.popped) return;
            b.y += b.speed;
            
            // Draw Bubble
            ctx.beginPath();
            ctx.arc(b.x, b.y, 35, 0, Math.PI * 2);
            ctx.fillStyle = b.color;
            ctx.fill();
            ctx.strokeStyle = "rgba(255,255,255,0.8)";
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Shine
            ctx.beginPath();
            ctx.arc(b.x - 12, b.y - 12, 10, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.6)";
            ctx.fill();

            // Text
            ctx.fillStyle = "#444";
            ctx.font = "bold 18px Fredoka";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(b.text, b.x, b.y);
        });

        // Remove off-screen
        bubblesRef.current = bubblesRef.current.filter(b => b.y < canvas.height + 70 && !b.popped);

        requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]); 

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      let hit = false;
      bubblesRef.current.forEach(b => {
          const dist = Math.sqrt((x - b.x) ** 2 + (y - b.y) ** 2);
          if (dist < 40 && !b.popped) {
              b.popped = true;
              hit = true;
              speak(b.text);
              
              if (b.text === targetRef.current) {
                  setScore(s => s + 10);
                  onScoreUpdate(10);
                  setNewTarget();
              } else {
                  // Penalty or just wrong sound?
                  setScore(s => Math.max(0, s - 5));
              }
          }
      });
  };

  return (
    <div className="relative w-full h-[80vh] bg-gradient-to-b from-blue-300 to-blue-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
        <div className="absolute top-4 left-0 right-0 flex justify-between px-6 pointer-events-none">
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl text-blue-900 font-bold shadow-sm">
                Pop: <span className="text-xl text-pink-500 uppercase">{target}</span>
            </div>
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl text-blue-900 font-bold shadow-sm">
                Score: {score}
            </div>
        </div>
        <canvas 
            ref={canvasRef} 
            className="w-full h-full cursor-crosshair"
            onClick={handleClick}
        />
        <div className="absolute bottom-20 left-0 right-0 text-center text-blue-900/50 text-sm pointer-events-none px-4">
            Pop bubble yang bertulis: {target}
        </div>
    </div>
  );
};

export default BubblePop;