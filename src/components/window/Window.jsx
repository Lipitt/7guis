import "./Window.css";

const Window = ({ title, children }) => {
  return (
    <div className="window">
      <div className="window-titlebar">
        <p>{title}</p>
      </div>
      <div className="window-content">{children}</div>
    </div>
  );
};

export default Window;
