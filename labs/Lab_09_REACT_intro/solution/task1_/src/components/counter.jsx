import React, { useState } from "react";

const Count = () => {
  const [count, SetCount] = useState(0);

  const ShowCount = () => {
    return count;
  };
  const GetClassesBage = () => {
    let classes = "badge text-light m-2 rounded-pill ";
    classes += count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const Increase = () => {
    SetCount((PreviousState) => PreviousState + 1);
    console.log(count);
  };

  const Decrease = () => {
    SetCount((PreviousState) => PreviousState - 1);
    console.log(count);
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center text-bg-dark rounded-pill py-2 shadow">
        <h2>
          <span className={GetClassesBage()}>{ShowCount()}</span>
        </h2>
        <div class="p-2">
          <button
            className="btn btn-outline-primary btn-lg m-2 text-light"
            onClick={Decrease}
          >
            -
          </button>
          <button
            className="btn btn-outline-primary btn-lg m-2 text-light"
            onClick={Increase}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Count;