import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div>
      {/* <p>Rating: {rating}/5</p> */}
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleRating(index + 1)}
          style={{ cursor: "pointer" }}
        >
          {index < rating ? <StarIcon /> : <StarBorderIcon />}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
