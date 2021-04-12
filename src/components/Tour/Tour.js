import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">£{price}</h4>
        </div>
        <p>
          {showMore ? info : `${info.substring(0, 100)}`}...
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "show less" : "read more"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
