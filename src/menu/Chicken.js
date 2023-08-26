import React, { useState, useEffect } from "react";
import '../css/Beverage.css'

const Chicken = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3004/products?cate=chickenBucket", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div >

        <h1 className="head">CHICKEN BUCKETS</h1>
        {posts.map((products) => (
          <div className="con" key={products.id}>
            <img src={products.images}/>
            <h3 className="titl">
               {products.name}
            </h3>
            <h3>
               <span>₹{products.price}</span>
            </h3>

            <p className="c">{products.description}</p>
            <button class="button-34" role="button">Add Cart</button>
          </div>
        ))}
      
    </div>
  );
};

export default Chicken;
