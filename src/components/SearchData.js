import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchData = () => {
  const [totalData, setTotalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const fetchApi = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      if (res.status === 200) {
        setData(res.data);
        setTotalData(res.data);
      }
      setLoading(false);
    } catch (err) {
      alert(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchVal = search.toLowerCase();
    const filterData = totalData.filter((item) =>
      item.title.toLowerCase().includes(searchVal)
    );
    setData(filterData);
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="d-flex"
        style={{ justifyContent: "center" }}
        role="search"
      >
        <input
          className="form-control me-2"
          style={{ width: "500px" }}
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {loading ? (
        <div
          style={{
            display: "flex",
            minHeight: "60vh",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="fs-3"
        >
          Loading...
        </div>
      ) : (
        <div className="row">
          {data &&
            data.map((curElem) => {
              return (
                <div key={curElem.id} className="col-12 bg-secondary p-2 my-1">
                  {curElem.title}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SearchData;
