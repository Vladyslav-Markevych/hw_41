import "./link.css";
interface childrenType  {
  children:  React.ReactNode, 
}
export function RefWay({ children }:childrenType) {
  return (
    <a className='link-text' href='./'>
      {children}
    </a>
  );
}
