import React, { useState } from 'react';

const illustrations = {
  flower: {
    rest: require('../../../assets/illustration/flower_rest.svg').ReactComponent,
    hover: require('../../../assets/illustration/flower_hover.svg').ReactComponent,
    pressed: require('../../../assets/illustration/flower_selected.svg').ReactComponent,
  },
  couple: {
    rest: require('../../../assets/illustration/couple_rest.svg').ReactComponent,
    hover: require('../../../assets/illustration/couple_hover.svg').ReactComponent,
    pressed: require('../../../assets/illustration/couple_selected.svg').ReactComponent,
  },
  venue: {
    rest: require('../../../assets/illustration/venue_rest.svg').ReactComponent,
    hover: require('../../../assets/illustration/venue_hover.svg').ReactComponent,
    pressed: require('../../../assets/illustration/venue_selected.svg').ReactComponent,
  },
  camera: {
    rest: require('../../../assets/illustration/camera_rest.svg').ReactComponent,
    hover: require('../../../assets/illustration/camera_hover.svg').ReactComponent,
    pressed: require('../../../assets/illustration/camera_selected.svg').ReactComponent,
  },
};

export default function Illustration({
  name = 'flower',
  onClick,
  selected = false,
  ariaLabel = '',
}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  const illustrationSet = illustrations[name] || illustrations['flower'];

  let IllustrationComponent = illustrationSet.rest;
  if (selected) {
    IllustrationComponent = illustrationSet.pressed;
  } else if (isHovering) {
    IllustrationComponent = illustrationSet.hover;
  }

  return (
    <button
      className="p-0 border-none bg-transparent focus-visible:ring-2 focus-visible:ring-[#0E7490] focus-visible:ring-offset-2"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      type="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={ariaLabel || `${name} illustration`}
    >
      <IllustrationComponent className="w-48 h-auto" />
    </button>
  );
}
