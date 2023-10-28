import PropTypes from "prop-types";
import "./Card.css"

function Card({ title, content, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  seasons: PropTypes.number.isRequired,
};

export default Card;
