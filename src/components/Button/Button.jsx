import './button.css'

export function Button({children, forCss}) {
    return (
        <button className={forCss}>{children}</button>
    );
}