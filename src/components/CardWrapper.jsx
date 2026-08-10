// CardWrapper demonstrates component composition using the "children" prop.
// It provides a reusable visual container/card style for whatever is
// passed into it, without knowing anything about the content itself.

function CardWrapper({ children }) {
  return <div className="card-wrapper">{children}</div>;
}

export default CardWrapper;
