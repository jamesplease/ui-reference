import React, { useMemo } from "react";
import Tooltip from "./vendor/tooltip";
import "./custom-tooltip.css";
import CustomTooltipBody from "./custom-tooltip-body";
import morph from "../utils/morph";

const ANIMATION_DURATION = 150;

export default function CustomTooltip({ referenceElement, active, onDismiss }) {
  // const [arrowElement, setArrowElement] = useState(null);

  const popperOptions = {
    placement: "bottom-start",
    modifiers: [
      // { name: "arrow", options: { element: arrowElement } },
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  };

  // This could be set based on a media query
  const REDUCE_MOTION = false;

  const animation = useMemo(() => morph(ANIMATION_DURATION, REDUCE_MOTION), [
    REDUCE_MOTION,
  ]);

  return (
    <Tooltip
      // For more, see: https://reach.tech/dialog/#labeling
      aria-label="Example Dialog"
      className="customTooltip"
      overlayClassName="customTooltip_overlay"
      active={active}
      onDismiss={onDismiss}
      referenceElement={referenceElement}
      animation={animation}
      animationDuration={ANIMATION_DURATION}
      popperOptions={popperOptions}
      // arrowRef={setArrowElement}
      // arrowProps={{
      //   className: "customTooltip_arrow",
      // }}
    >
      <CustomTooltipBody onDismiss={onDismiss} />
    </Tooltip>
  );
}
