import { useMousePosition } from '../../hooks/useMousePosition';

export function FloatingOrbs() {
  const { x, y } = useMousePosition();

  const orbs = [
    { size: 384, color: 'bg-blue-500', top: '0', left: '25%', delay: '0s' },
    { size: 320, color: 'bg-emerald-500', top: '33%', left: '75%', delay: '2s' },
    { size: 256, color: 'bg-violet-500', top: '66%', left: '33%', delay: '4s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${orb.color} blur-[80px] opacity-40 animate-pulse-slow`}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            animationDelay: orb.delay,
            transform: `translate(${(x - 0.5) * (i + 1) * 20}px, ${(y - 0.5) * (i + 1) * 20}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      ))}
    </div>
  );
}


