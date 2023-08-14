import React, { useEffect, useState } from 'react'
import{ Link } from 'react-router-dom'


export default function Menulist() {
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
    <>
    <div className="list m-20">
        <div className=" text-lg text-red-600 font-bold">KFC</div>
        <div className="b font-bold py-4">

            <Link to='/menu/chicken' style={{textDecoration:'none'}}><p>CHICKEN BUCKET</p></Link>
            {posts.map((products) => (
          <div className="con" key={products.id}>
            <img src={products.images}  />
            <h3>
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
        <div className="b font-bold  py-4">

            <Link to='/menu/meal' style={{textDecoration:'none'}}><p>BOX MEALS</p></Link>
        </div>
        <div className="b font-bold py-4">

            <Link to='/menu/burger' style={{textDecoration:'none'}}><p>BURGERS</p></Link>
        </div>
        <div className="b font-bold py-4">
            <Link to='/menu/biryani' style={{textDecoration:'none'}}><p>BIRYANI BUCKET</p></Link>
        </div>
        <div className="b font-bold py-4">

            <Link to='/menu/snack' style={{textDecoration:'none'}}><p>SNACKS</p></Link>
        </div>
        <div className="b font-bold py-4">

            <Link to='/menu/beverage' style={{textDecoration:'none'}}><p>BEVERAGES AND DESSERTS</p></Link>
        </div>
    </div>
    </>
  )
}
