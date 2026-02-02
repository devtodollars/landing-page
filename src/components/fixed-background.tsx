export default function FixedBackground() {
  // Pre-calculated star positions to avoid hydration mismatch
  const stars = [
    { top: 5, left: 10, size: 2, delay: 0 },
    { top: 12, left: 85, size: 1.5, delay: 0.5 },
    { top: 20, left: 30, size: 2.5, delay: 1 },
    { top: 25, left: 70, size: 1, delay: 1.5 },
    { top: 35, left: 15, size: 2, delay: 2 },
    { top: 40, left: 55, size: 1.5, delay: 0.3 },
    { top: 45, left: 90, size: 2, delay: 0.8 },
    { top: 52, left: 5, size: 1, delay: 1.2 },
    { top: 58, left: 40, size: 2.5, delay: 1.7 },
    { top: 65, left: 75, size: 1.5, delay: 2.2 },
    { top: 70, left: 20, size: 2, delay: 0.6 },
    { top: 75, left: 60, size: 1, delay: 1.1 },
    { top: 80, left: 95, size: 2, delay: 1.6 },
    { top: 85, left: 35, size: 1.5, delay: 2.1 },
    { top: 90, left: 80, size: 2.5, delay: 0.4 },
    { top: 8, left: 50, size: 1, delay: 0.9 },
    { top: 55, left: 25, size: 2, delay: 1.4 },
    { top: 95, left: 12, size: 1.5, delay: 1.9 },
  ];

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Soft cloud-like gradient - top area */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 202, 40, 0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      {/* Soft cloud-like gradient - center right */}
      <div
        className="absolute top-[20%] -right-[15%] w-[50%] h-[50%] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 202, 40, 0.10) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />

      {/* Soft cloud-like gradient - bottom */}
      <div
        className="absolute top-[60%] left-[20%] w-[70%] h-[50%] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 202, 40, 0.11) 0%, transparent 65%)",
          filter: "blur(140px)",
        }}
        aria-hidden="true"
      />

      {/* Animated stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            backgroundColor: i % 3 === 0 ? "#ffca28" : "white",
            boxShadow:
              i % 3 === 0
                ? "0 0 4px 1px rgba(255, 202, 40, 0.5)"
                : "0 0 4px 1px rgba(255, 255, 255, 0.3)",
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
