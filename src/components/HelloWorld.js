import React from "react";
import { useSelector } from "react-redux";

const HelloWorld = ({ name, ...props }) => {
  const { photo_url } = useSelector((state) => state);
  return (
    <>
      <div className="hello-world">
        Hello World <strong>{name}!</strong>
      </div>
      {photo_url && (
        <div className="image-block">
          <img src={photo_url} alt="example img" />
        </div>
      )}
    </>
  );
};

export default HelloWorld;
