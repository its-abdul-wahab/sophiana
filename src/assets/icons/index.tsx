interface IProps {
  classNames?: string;
}

const Arrow = ({ classNames }: IProps) => {
  return (
    <svg
      width="22"
      height="11"
      className={`${classNames ? classNames : ""}`}
      viewBox="0 0 22 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 10.0726L11 1L1 10.0726" fill="#FDFDFD" />
      <path
        d="M21 10.0726L11 1L1 10.0726"
        stroke="#545454"
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Arrow };
