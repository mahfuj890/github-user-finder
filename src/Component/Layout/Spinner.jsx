import React from "react";
import  spinnerImage  from "../../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-100 mb-20">
      <img
        src={spinnerImage}
        alt="Loading"
        width={180}
        className="text-center mx-auto"
      />
    </div>
  );
};

Spinner.propTypes = {};

export default Spinner;
