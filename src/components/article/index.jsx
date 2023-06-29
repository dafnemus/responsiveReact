import PropTypes from "prop-types";
import "./styles.css";

const Article = ({ title, paragraphs, id }) => {
  return (
    <div id={id}>
      <h2>{title}</h2>
      {paragraphs.map((item) => (
        <p key={item.id}>
          <img src={item.img} alt={item.alt} className={item.className} />
          {item.text}
        </p>
      ))}
    </div>
  );
};

Article.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  paragraphs: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      img: PropTypes.string,
      alt: PropTypes.string,
      text: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

Article.defaultProps = {
  id: "",
  title: "",
  paragraphs: [
    {
      id: 0,
      img: "",
      alt: "",
      text: "",
    },
  ],
};

export default Article;
