export interface IconProps {
  readonly color?: string;
  readonly size?: number;
  readonly className?: string;
}

function LogoIcon(props: IconProps) {
  const { color = "#0E73F6", size = 20, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.43699 25.7713V21.1272H17.5089V25.7713H1.43699ZM0.666656 9.85238C0.666656 21.5879 18.281 21.5879 18.281 9.85238C18.281 6.9277 18.281 0.225098 18.281 0.225098H13.6443C13.6443 3.31563 13.6443 6.40616 13.6443 9.49485C13.6443 15.4769 5.30153 15.4769 5.30153 9.49485C5.30153 6.40616 5.30153 3.31563 5.30153 0.225098H0.666656C0.666656 0.225098 0.666656 6.9277 0.666656 9.85238Z"
        fill={color}
      />
    </svg>
  );
}

export default LogoIcon;
