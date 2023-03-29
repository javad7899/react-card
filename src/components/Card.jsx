import "./Card.css";
export const Card = ({ imgSrc, imgAlt, title, desc, btnText, link }) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {desc && <p className="card-desc">{desc}</p>}
      {btnText && link && (
        <a href={link} className="card-btn">
          {btnText}
        </a>
      )}
    </div>
  );
};
