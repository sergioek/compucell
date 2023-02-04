import React from "react";

export const BtnShowPassword = ({ setInputPassword }) => {
  return (
    <>
      <div
        className="input-group-text bi bi-eye btn btn-primary"
        onMouseDown={() => {
          setInputPassword("text");
        }}
        onMouseUp={() => {
          setInputPassword("password");
        }}
        onTouchStart={() => {
          setInputPassword("text");
        }}
        onTouchEnd={() => {
          setInputPassword("password");
        }}
      ></div>
    </>
  );
};
