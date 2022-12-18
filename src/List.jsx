import React from "react";

const List = ({ name, age, image }) => {
  return (
    <div className="person">
      <img src={image} />
      <div className="details">
        <h3 className="name">{name}</h3>
        <p className="age">{age} years</p>
      </div>
    </div>
  );
};

export default List;
