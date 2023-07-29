import React from 'react'
import '../css/Menu.css'
import Menulist from './Menulist'
import Chicken from './Chicken'
import Meal from './Meal'
import Burger from './Burger'
import Snack from './Snack'
import Beverage from './Beverage'
import Biryani from './Biryani'
import {Routes,Route, BrowserRouter} from 'react-router-dom'

export default function Menu() {
  return (
    <>
    <div className=" flex gap-4" >
        <div className='w-1/4 mx-20 flex'>
          <Menulist/>
        </div>
        <div className="bg-gray-800 w-3/4 h-full"> 
            <Routes>
                <Route path='/menu/' element={<Chicken />} />
                <Route path='/menu/meal' element={<Meal />} />
                <Route path='/menu/burger' element={<Burger />} />
                <Route path='/menu/snack' element={<Snack />} />
                <Route path='/menu/beverage' element={<Beverage />} />
                <Route path='/menu/biryani' element={<Biryani />} />
            </Routes>            
        </div>
    </div> 
    </>   
  )
}
