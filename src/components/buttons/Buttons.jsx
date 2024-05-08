export const NormalButton = ({children, href, className = ""}) => {
  return (
      <a href={href} className={`btn ${className}`}>
        {children}
      </a>
  );
};

{/* <a href="#footer" className="btn">Learn more</a> */}

export const SecondaryButton = ({children, href}) => {
  return (
      <a href={href} className="btn-secondary">
        {children}
      </a>
  );
}

