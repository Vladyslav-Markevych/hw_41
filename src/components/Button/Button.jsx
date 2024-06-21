import "./button.css";

export function Button({ onClick, children, forCss }) {
  return (
    <button onClick={onClick} className={forCss}>
      {children}
    </button>
  );
}
