import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;

  return (
    <div>
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://images.livemint.com/img/2022/09/16/600x338/bdcf5fec-747d-11ec-8f17-311f48466dc2_1643862286602_1663328484679_1663328484679.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-success">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark "
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
