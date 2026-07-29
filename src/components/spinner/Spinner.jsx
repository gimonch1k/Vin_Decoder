function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="120"
      height="120"
      style={{
        shapeRendering: "auto",
        display: "block",
        background: "transparent",
        margin: "0 auto",
      }}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#2200cd"
          strokeWidth="6"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1.1764705882352942s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
        <g></g>
      </g>
    </svg>
  );
}

export default Spinner;
