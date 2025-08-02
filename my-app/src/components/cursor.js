import React, { useEffect, useState } from "react";

export default function LuxuryCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                width: 40,
                height: 40,
                pointerEvents: "none",
                borderRadius: "50%",
                border: "2px solid #af8c5a",
                transform: "translate(-50%, -50%)",
                transition: "transform 0.1s ease-out",
                boxShadow:
                    "0 0 10px 2px rgba(175, 140, 90, 0.7), 0 0 20px 5px rgba(175, 140, 90, 0.3)",
                zIndex: 9999,
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
        />
    );
}
