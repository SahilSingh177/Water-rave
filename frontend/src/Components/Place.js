import React, { useEffect, useState } from "react";
import "./Place.css";
import Navbar from "./Navbar";
import axios from "axios";
import Form from 'react-bootstrap/Form';
export default function Place(params) {
  const section = document.querySelector("section");

  let currentPos = window.pageYOffset;
  if (section) {
    const update = () => {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.35;

      section.style.transform = `skewY(${speed}deg)`;

      currentPos = newPos;

      requestAnimationFrame(update);
    };
    update();
  }
  const [name, setName] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setName(queryParams.get("place"));
    axios
      .get("http://localhost:5000/getPosts", {
        params: { place: queryParams.get("place") },
      })
      .then((response) => setReviewList(response.data.result));
  }, []);

  const createPost = () => {
    axios
      .post("http://localhost:5000/createPost", {
        author: "anon",
        description: description,
        place: name,
        rating: rating,
      })
      .then((response) => console.log(response));
  };
  return (
    <>
      <Navbar />
      <section id="head">
        <h1>
          <center>
            {" "}
            {name}
            <br />
            { (reviewList.reduce((total,cur,i)=>  (total*(i)+cur.rating)/(i+1),0)).toFixed(2)}
          </center>
        </h1>
        <div class="mb-3" id="ReviewSec">
          <label
            for="exampleFormControlTextarea1"
            class="form-label"
            style={{ fontSize: `2vw` }}
          >
            Add Review
          </label>
          <br /><Form.Select id="ratingValue" onChange={(e)=>{ setRating(e.target.value==="null"? 0: e.target.value - '0')}}>
            <option value="null">Select Rating out of 5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
           <br />
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            id="reviewBtn"
            type="submit"
            className="btn btn-primary"
            onClick={createPost}
          >
            Add
          </button>
        </div>
      </section>
      <div class='cardCont'>
        {reviewList.map((item) => (
          <>
            <div class="blog_post">
              <div class="container_copy">
                <h1>{item.author}</h1>
                <p className="reviewPara">{item.description}.</p>
                <h2>{item.rating }</h2>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
