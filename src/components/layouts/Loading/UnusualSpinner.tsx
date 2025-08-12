// https://codepen.io/jkantner/pen/ZEvQbOK
const GoOffTrack = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 128 128"
        width="128px"
        height="128px"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ring */}
        <circle
          r="56"
          cx="64"
          cy="64"
          fill="none"
          stroke-width="16"
          stroke-linecap="round"
          style={{
            stroke: 'var(--color-muted)',
            transition: 'stroke 0.3s',
          }}
        />
        {/* Worm */}
        <path
          d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z"
          fill="none"
          stroke="currentColor"
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="44 1111"
          stroke-dashoffset="10"
          style={{
            animationDuration: '2s',
            animationIterationCount: 'infinite',
            animationName: 'worm',
            animationTimingFunction: 'cubic-bezier(0.42,0.17,0.75,0.83)',
          }}
        />
      </svg>
      <style>
        {`
          @keyframes worm {
            from { stroke-dashoffset: 10; }
            25% { stroke-dashoffset: 295; }
            to { stroke-dashoffset: 1165; }
          }
        `}
      </style>
    </div>
  );
};

export const UnusualSpinner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <GoOffTrack className="h-15 w-15" />
    </div>
  );
};
