import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddedEmp from "./components/AddedEmp";
import SearchData from "./components/SearchData";
import { addEmp, getAverageAge } from "./redux/empReducer";

const App = () => {
  const dispatch = useDispatch();
  const addedEmp = useSelector((state) => state.empSlice);
  const [showTestOne, setShowTestOne] = useState(false);
  const [showTestTwo, setShowTestTwo] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      first_name: "Jaymee",
      last_name: "Imm",
      email: "jimm0@craigslist.org",
      gender: "Genderqueer",
      age: 80,
      isDisable: false,
    },

    {
      id: 2,
      first_name: "Jody",
      last_name: "Themann",
      email: "jthemann1@skyrock.com",
      gender: "Agender",
      age: 29,
      isDisable: false,
    },

    {
      id: 3,
      first_name: "Cece",
      last_name: "Carlet",
      email: "ccarlet2@jalbum.net",
      gender: "Male",
      age: 69,
      isDisable: false,
    },

    {
      id: 4,
      first_name: "Elton",
      last_name: "Allinson",
      email: "eallinson3@jugem.jp",
      gender: "Male",
      age: 31,
      isDisable: false,
    },

    {
      id: 5,
      first_name: "Garvy",
      last_name: "Shaddick",
      email: "gshaddick4@rediff.com",
      gender: "Male",
      age: 32,
      isDisable: false,
    },

    {
      id: 6,
      first_name: "Fin",
      last_name: "Realy",
      email: "frealy5@unc.edu",
      gender: "Male",
      age: 26,
      isDisable: false,
    },

    {
      id: 7,
      first_name: "Minnaminnie",
      last_name: "Fransseni",
      email: "mfransseni6@aboutads.info",
      gender: "Agender",
      age: 52,
      isDisable: false,
    },
  ]);
  useEffect(() => {
    dispatch(getAverageAge());
    // eslint-disable-next-line
  }, [addedEmp.item]);
  const handleAdd = (item) => {
    dispatch(addEmp({ ...item }));
    const filterEmp = data.filter((emp) => emp.id !== item.id);
    setData([...filterEmp, { ...item, isDisable: true }]);
  };
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          onClick={() => {
            setShowTestOne(true);
            setShowTestTwo(false);
          }}
          type="button"
          className="btn btn-success mx-2 my-2"
        >
          Test-1
        </button>
        <button
          onClick={() => {
            setShowTestOne(false);
            setShowTestTwo(true);
          }}
          type="button"
          className="btn btn-success mx-2 my-2"
        >
          Test-2
        </button>
      </div>

      {showTestOne && <SearchData />}
      {showTestTwo && (
        <>
          <div className="container">
            <h1>Employees</h1>
            {data.map((curElem) => {
              return (
                <div
                  key={curElem.id}
                  className="row bg-secondary border border-3 p-2 my-1"
                >
                  <div className="col-6">{curElem.first_name}</div>
                  <div className="col-3">{curElem.age}</div>
                  <div className="col-3">
                    <button
                      onClick={() => handleAdd(curElem)}
                      type="button"
                      className={`btn ${
                        curElem.isDisable ? "btn-dark" : "btn-primary"
                      }`}
                      disabled={curElem.isDisable}
                    >
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <AddedEmp />
        </>
      )}
    </>
  );
};

export default App;
