import { memo } from "react";
import { IonIcon } from "../IonIcon";

export const SlideLeftButton = memo(({
    onClick, onMouseOut, onMouseOver
}: {
    onClick: () => void, onMouseOut: () => void, onMouseOver: () => void
}) => (
    <button
        className="slider-btn prev"
        aria-label="slide to previous"
        data-prev-btn
        onClick={onClick}
        onMouseOver={onMouseOut}
        onMouseOut={onMouseOver}
    >
        <IonIcon name="chevron-back" />
    </button>
))