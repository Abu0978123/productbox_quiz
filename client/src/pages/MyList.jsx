import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function MyList() {
  const navigate = useNavigate();
  const [Dataa, setData] = useState();
  useEffect(() => {
    getData();
  }, []);


  //using get method to fetch data from json server
  async function getData() {
    try {
      const Dataa = await axios.get("http://localhost:4000/items");
      setData(Dataa.data);
    } catch (error) {
      console.log("someThing is going wrong");
    }
  }
  //the following function for delete data through API
  async function handleDelete(id) {
    await axios.delete(`http://localhost:4000/items/${id}`).then(() => {
      getData();
    });
  }
  return (
    <div className="container ">
      <div className="now box">
        {Dataa && Dataa.length > 0 ? (
          Dataa.slice(5).map((items, i) => (
            <div key={i}>
              <div className="card col-md-12" style={{ width: "18rem" }}>
                <img src = {items?.img} className="card-img-top" alt={items.img} />
                <div className="card-body">
                  <h5 className="card-title">{items.name}</h5>
                  <p className="card-text">{items.price}</p>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleDelete(items.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>No Data founded</p>
          </div>
        )}
      </div>
      <Link to={"/add"}>
            <button
              type="submit"
              style={{ marginLeft: "9px" }}
              className="btn btn-primary"
            >
              Go and Add more cart
            </button>
          </Link>
    </div>
  );
}
