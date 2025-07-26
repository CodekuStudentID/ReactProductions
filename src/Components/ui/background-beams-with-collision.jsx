import React from "react";

export function BackgroundBeamsWithCollision({ children }) {
  return (
    <div className="relative w-full h-full">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[200%] h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rotate-45 animate-pulse opacity-30"></div>
        <div className="absolute w-[200%] h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 -rotate-45 animate-pulse opacity-30 top-1/3 right-0"></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
