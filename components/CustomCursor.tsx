"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(follower, "x", {
      duration: 0.6, // 따라오는 커서 속도
      ease: "power3",
    });
    const yTo = gsap.quickTo(follower, "y", {
      duration: 0.6,
      ease: "power3",
    });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={followerRef} className="cursor-follower" />
      <style jsx>{`
        .cursor-follower {
          position: fixed;
          top: 0;
          left: 0;
          width: 30px;
          height: 30px;
          border: 2px solid white;
          background: none;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
