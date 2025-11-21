import { useState, useEffect } from "react";
import "./ZoomControls.scss";

const zoomLevels = [8, 12, 16, 20];

const ZoomControls = ({ onChange }: { onChange?: (fontSize: number) => void }) => {
    const [currentIndex, setCurrentIndex] = useState(1); // стартовый 12px

    const handleZoomIn = () => setCurrentIndex((prev) => Math.min(prev + 1, zoomLevels.length - 1));
    const handleZoomOut = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

    useEffect(() => {
        document.documentElement.style.setProperty("--table-font-size", `${zoomLevels[currentIndex]}px`);
        onChange?.(zoomLevels[currentIndex]);
    }, [currentIndex, onChange]);

    return (
        <div className="zoom-controls">
            <button onClick={handleZoomOut} disabled={currentIndex === 0} title="Уменьшить">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6"/>
                </svg>
            </button>
            <span className="zoom-label">{zoomLevels[currentIndex]}px</span>
            <button onClick={handleZoomIn} disabled={currentIndex === zoomLevels.length - 1} title="Увеличить">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"/>
                </svg>
            </button>
        </div>
    );
};

export default ZoomControls;
