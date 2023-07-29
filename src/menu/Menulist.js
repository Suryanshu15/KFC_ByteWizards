import React from 'react'
import{ Link } from 'react-router-dom'


export default function Menulist() {
  return (
    <>
    <div className="list m-20">
        <div className=" text-lg text-red-600 font-bold">KFC</div>
        <div className="b font-bold py-4">

            <Link to='/menu/chicken' style={{textDecoration:'none'}}><p>CHICKEN BUCKET</p></Link>
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
