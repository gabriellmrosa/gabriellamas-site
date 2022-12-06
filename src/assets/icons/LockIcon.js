const LockIcon = ({ theme }) => {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_899_13183)">
        <path
          d="M72 32H68V24C68 12.96 59.04 4 48 4C36.96 4 28 12.96 28 24V32H24C19.6 32 16 35.6 16 40V80C16 84.4 19.6 88 24 88H72C76.4 88 80 84.4 80 80V40C80 35.6 76.4 32 72 32ZM36 24C36 17.36 41.36 12 48 12C54.64 12 60 17.36 60 24V32H36V24ZM72 80H24V40H72V80ZM48 68C52.4 68 56 64.4 56 60C56 55.6 52.4 52 48 52C43.6 52 40 55.6 40 60C40 64.4 43.6 68 48 68Z"
          fill={`${theme === "dark" ? "#000" : "#fff"}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_899_13183">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LockIcon;
