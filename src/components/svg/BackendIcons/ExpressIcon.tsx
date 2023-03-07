import React from 'react';

type svgProps = {
  styles?: React.CSSProperties;
  title?: string;
};

function ExpressIcon(props: svgProps) {
  const { styles, title } = props;
  return (
    <div title={title}>
      <svg style={styles} xmlns="http://www.w3.org/2000/svg" width="120" height="60">
        <path d="M40 41.753V18.708h1.25v3.625a4.74 4.74 0 0 0 .408-.511c1.044-2.166 3.246-3.533 5.65-3.506 2.85-.085 5.166.97 6.527 3.506a11.27 11.27 0 0 1 .272 10.331c-1.268 2.842-4.4 4.255-7.753 3.736a6.27 6.27 0 0 1-5.004-3.302v9.165zm1.25-14.893l.28 2.706c.494 3.08 2.315 4.9 5.174 5.242a5.88 5.88 0 0 0 6.459-3.736c1.112-2.65 1.03-5.65-.22-8.238a5.76 5.76 0 0 0-6.068-3.353 5.61 5.61 0 0 0-5.012 4.144 28.62 28.62 0 0 0-.613 3.234zm39.498 3.132a6.74 6.74 0 0 1-6.587 5.957c-5.242.264-7.702-3.217-8.093-7.234a11.59 11.59 0 0 1 1.021-6.383 7.12 7.12 0 0 1 7.412-3.974 6.81 6.81 0 0 1 6.042 5.183 34.97 34.97 0 0 1 .587 3.83H67.363c-.255 3.642 1.702 6.57 4.476 7.276 3.455.85 6.408-.647 7.48-3.932.238-.843.672-.962 1.438-.723zm-13.395-3.787h12.314c-.077-3.88-2.493-6.7-5.77-6.732-3.7-.06-6.383 2.647-6.544 6.732zm15.94 3.872H84.5a4.84 4.84 0 0 0 2.842 4.17 7.43 7.43 0 0 0 6.451-.17 2.9 2.9 0 0 0 1.702-2.851 2.63 2.63 0 0 0-1.77-2.63c-1.328-.494-2.74-.766-4.093-1.2a30 30 0 0 1-4.119-1.506c-2.18-1.064-2.315-5.208.153-6.52a8.69 8.69 0 0 1 8.306-.128c1.594.88 2.475 2.657 2.213 4.46H95.15c0-.05-.094-.094-.094-.145-.128-3.3-2.902-4.332-5.88-4.042-.9.1-1.753.372-2.553.774a2.55 2.55 0 0 0-1.48 2.553 2.55 2.55 0 0 0 1.702 2.4c1.3.477 2.68.783 4.025 1.157l3.25.85a3.84 3.84 0 0 1 2.638 3.464c.26 1.745-.63 3.46-2.204 4.255-2.842 1.608-7.523 1.183-9.608-.85-1.067-1.073-1.662-2.53-1.65-4.042zm28.78-6.374h-1.132c0-.153-.06-.3-.077-.417a3.7 3.7 0 0 0-3.013-3.557 7.43 7.43 0 0 0-4.774.23 2.9 2.9 0 0 0-2.102 2.766 2.67 2.67 0 0 0 2.042 2.689l5.174 1.328a14.39 14.39 0 0 1 1.65.502c1.65.6 2.77 2.132 2.82 3.883a4.25 4.25 0 0 1-2.6 4.04 9.47 9.47 0 0 1-7.659.077 5.31 5.31 0 0 1-3.2-5.157h1.106c.416 2.005 1.793 3.675 3.682 4.465s4.046.596 5.764-.516a3.04 3.04 0 0 0 1.634-2.842 2.63 2.63 0 0 0-1.796-2.613c-1.328-.494-2.74-.757-4.093-1.2a30.15 30.15 0 0 1-4.144-1.489c-2.128-1.047-2.298-5.157.128-6.468a8.57 8.57 0 0 1 8.442-.094 4.45 4.45 0 0 1 2.136 4.366zm-74.13 11.83a1.95 1.95 0 0 1-2.417-.919l-4.4-6.085-.638-.85-5.106 6.944a1.87 1.87 0 0 1-2.298.902l6.578-8.825-6.12-7.974c.908-.328 1.92.028 2.425.85l4.56 6.16 4.587-6.136a1.83 1.83 0 0 1 2.281-.851L35.02 21.9l-3.217 4.187a.85.85 0 0 0 0 1.268l6.127 8.178zm27.93-16.892v1.2a6.17 6.17 0 0 0-6.57 6.374q0 4.204 0 8.408v.953h-1.217v-16.86h1.2v3.455c1.472-2.52 3.744-3.455 6.595-3.523zM7.333 26.59l.536-2.647c1.472-5.234 7.472-7.412 11.6-4.17 2.417 1.898 3.02 4.587 2.902 7.617H8.754c-.22 5.412 3.685 8.68 8.68 7.012 1.646-.6 2.885-1.968 3.293-3.668.264-.85.7-.996 1.498-.75a6.91 6.91 0 0 1-3.302 5.047 8 8 0 0 1-9.319-1.191c-1.216-1.367-1.95-3.095-2.093-4.92 0-.3-.1-.58-.17-.85q-.01-.757-.01-1.48zm1.438-.366h12.314c-.077-3.923-2.553-6.706-5.855-6.732-3.676-.05-6.306 2.672-6.468 6.715z" />
      </svg>
    </div>
  );
}

export default ExpressIcon;
