import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeEmp, sortData } from "../redux/empReducer";

const AddedEmp = () => {
  const dispatch = useDispatch();
  const addedEmp = useSelector((state) => state.empSlice);
  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Team</h1>{" "}
        <button
          onClick={() => dispatch(sortData())}
          type="button"
          className="btn btn-info"
        >
          Sort by age
        </button>
      </div>
      {addedEmp.item &&
        addedEmp.item.map((curElem) => {
          return (
            <div key={curElem.id} className="row bg-secondary p-2 my-1">
              <div className="col-6">{curElem.first_name}</div>
              <div className="col-3">{curElem.age}</div>
              <div className="col-3">
                <button
                  onClick={() => dispatch(removeEmp(curElem.id))}
                  type="button"
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      <div className="row">
        <div className="bg-secondary text-end fs-3 p-2 mt-2 fw-bold">
          Average age {addedEmp.averageAge}
        </div>
      </div>
    </div>
  );
};

export default AddedEmp;
