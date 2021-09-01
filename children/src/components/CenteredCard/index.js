import "./style.css";
const CenteredCard = ({ children }) => {
  return (
    <div className="card">
      <span>{children}</span>
    </div>
  );
};

export default CenteredCard;
