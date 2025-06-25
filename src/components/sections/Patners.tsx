import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { useState, useEffect } from "react";

const logos = [
  "bingx",
  "axiom",
  "gmgn",
  "Hyperliquid",
  "Binance",
  // "mexc",
  "kucoin",
];

export const Patners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate logos every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Function to get visible logos (current + 2 on each side)
  const getVisibleLogos = () => {
    const visibleCount = 5; // Show 5 logos at once
    const visibleLogos = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex - 2 + i + logos.length) % logos.length;
      visibleLogos.push({
        logo: logos[index],
        originalIndex: index,
        position: i - 2, // -2, -1, 0, 1, 2
      });
    }

    return visibleLogos;
  };

  return (
    <section>
      <Container className="space-y-4">
        <div className="text-center max-w-full mx-auto">
          <Title>Trusted by Industry Leaders</Title>
        </div>

        <div className="flex items-center justify-center overflow-hidden py-8">
          {/* MAIN CHANGE: Added fixed width container and proper horizontal translation */}
          <div className="relative w-full max-w-4xl h-20 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {getVisibleLogos().map(({ logo, originalIndex, position }) => {
                const isCenter = position === 0;
                const distance = Math.abs(position);

                // MAIN CHANGE: Calculate horizontal offset for sliding effect
                const horizontalOffset = position * 140; // 140px spacing between logos

                return (
                  <div
                    key={`${logo}-${originalIndex}`}
                    className={`absolute transition-all duration-700 ease-in-out flex-shrink-0 ${
                      isCenter
                        ? "scale-110 z-20"
                        : distance === 1
                        ? "scale-95 opacity-90 z-10"
                        : "scale-80 opacity-60 z-0"
                    }`}
                    style={{
                      // MAIN CHANGE: Use translateX for horizontal sliding
                      transform: `translateX(${horizontalOffset}px) scale(${
                        isCenter ? 1.1 : distance === 1 ? 0.95 : 0.8
                      })`,
                    }}
                  >
                    <div
                      className={` border transition-all duration-700 ${
                        isCenter
                          ? "border-primary/20 shadow-lg shadow-primary/10"
                          : "border-box-border"
                      } group hover:border-primary/40 hover:shadow-md`}
                    >
                      <img
                        src={`${logo}.jpg`}
                        width={isCenter ? 120 : 100}
                        height={isCenter ? 72 : 60}
                        alt={`${logo} logo`}
                        className={`h-10 sm:h-15 w-auto transition-all duration-700 ${
                          isCenter
                            ? "grayscale-0"
                            : "grayscale hover:grayscale-0"
                        }`}
                        onError={(e) => {
                          // Fallback if image doesn't load
                          const img = e.target as HTMLImageElement;
                          img.style.display = "none";
                          if (img.parentElement) {
                            img.parentElement.innerHTML = `
                              <div class="flex items-center justify-center w-20 h-8 text-xs font-medium text-gray-400 bg-gray-100 rounded">
                                ${logo.toUpperCase()}
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Optional: Add dots indicator
        <div className="flex justify-center gap-2">
          {logos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to logo ${index + 1}`}
            />
          ))}
        </div> */}
      </Container>
    </section>
  );
};
