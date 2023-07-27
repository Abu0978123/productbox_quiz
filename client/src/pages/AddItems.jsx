import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function AddItems() {
  const Navigate = useNavigate();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [img, setImg] = useState();
  //the following API is used for posting new data in the json server
  async function postData(e){
    e.preventDefault();
    await axios.post('http://localhost:4000/items',{
      name,
      price,
      img
    }).then(()=>{
      Navigate('/check-out')
    })
  }
  return (
    <div className="container">
      <div className="formm shadow">
        <form>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Enter Name
            </label>
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Enter Name"
              name="name"
              aria-describedby="emailHelp"
              onChange={((e)=>{setName(e.target.value)})}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Enter Price
            </label>
            <input
              placeholder=" Enter Price"
              type="number"
              name="price"
              className="form-control"
              id=""
              onChange={((e)=>{setPrice(e.target.value)})}
            />
            <label htmlFor="" className="form-label">
              Enter URL
            </label>
             <input
              placeholder=" paste your URL"
              name="img"
              type="text"
              className="form-control"
              id=""
              onChange={((e)=>{setImg(e.target.value)})}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
              onClick={((e)=> postData(e)) }
          >
            Submit
          </button>
          <Link to={"/check-out"}>
            <button
              type="submit"
              style={{ marginLeft: "9px" }}
              className="btn btn-secondary"
            >
              Go and Check it out
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}