import React from "react";

const WatchCard = ({ id, name, image, category }) => {
  return (
    <div
      data-testid={`watch-card-wrapper-${id}`}
      style={{
        display: "block",
        width: "300px",
        height: "390px",
        border: "2px solid black",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "320px",
          padding: "20px 20px 0 20px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          data-testid="watch-card-image"
          alt="watch"
          src={image}
          style={{
            backgroundSize: "contain",
            width: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <div data-testid="watch-name" style={{ fontSize: "24px" }}>
          {name}
        </div>
        <div data-testid="watch-category">{category}</div>
      </div>
    </div>
  );
};

export default WatchCard;
