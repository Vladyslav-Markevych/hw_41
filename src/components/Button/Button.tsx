import "./button.css";

interface buttonProps {
  onClick?: () => void,
  children: React.ReactNode,
  forCss: string,
}

export function Button({ onClick, children, forCss }:buttonProps) {
  return (
    <button onClick={onClick} className={forCss}>
      {children}
    </button>
  );
}

