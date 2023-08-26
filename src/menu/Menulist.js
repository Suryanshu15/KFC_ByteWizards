import {
    Flex,
    Box,
    Grid,
    Heading,
    Hide
  } from "@chakra-ui/react";
import VerticalLine from "../components/VerticalLine";
import React from 'react'
import{ Link } from 'react-scroll'
import '../css/Menulist.css'
import Chicken from './Chicken'
import Meal from './Meal'
import Burger from './Burger'
import Snack from './Snack'
import Beverage from './Beverage'
import Biryani from './Biryani'

export default function Menulist() {
  return (
    <>
     <Box  >
      <Grid
        gridTemplateColumns={{lg:"1fr 4fr"}}
        justifyContent="center"
        margin="auto">
        <Hide below="lg" >
        <Box> 
            <Flex
              position={{md:"sticky",lg:"sticky"}}
              top={{md:"100px",lg:"50px",xl:"50px"}}
              left="0"
              p="50px"
              bg="white"
              gap="20px"
              justifyContent="center"
              alignItems="start"
              flexDir={{ lg: "column", sm: "row", md: "row" }}
              flexWrap="wrap"
              margin="auto"
              width={{base:"100%",md:"100%"}}>
              <Box >
              
                <VerticalLine />
                <Heading mb="10px" size="lg">KFC MENU</Heading>
              
              </Box>
           
            
              <Link  to="chickenBucket" activeClass="active" duration={1700} spy={true} smooth={true}>Chicken Buckets</Link>
              
              <Link to="boxMeals" activeClass="active" duration={1700} spy={true} smooth={true}>Box Meals</Link>
               
              <Link to="burgers" activeClass="active" duration={1700} spy={true} smooth={true}>Burgers</Link>

              <Link to="biryaniBuckets" activeClass="active" duration={1700} spy={true} smooth={true}>Biryani Buckets</Link>

              <Link to="snack" activeClass="active" duration={1700} spy={true} smooth={true}>Snack</Link>

              <Link to="beveragesAndDesserts" activeClass="active" duration={1700} spy={true} smooth={true}>Beverages And Desserts</Link>
             
            </Flex>
          
        </Box>
        </Hide>

        
        <Grid  mb="50px"  boxShadow="base"  >

             <Box  id="chickenBucket" >
                <Chicken/>
             </Box>

             <Box  id="boxMeals">
                <Meal/>
             </Box>

             <Box  id="burgers">
                <Burger/>
             </Box>
             <Box  id="biryaniBuckets">
                <Biryani/>
             </Box>

             <Box  id="snack">
                <Snack/>
             </Box>

             <Box  id="beveragesAndDesserts">
                <Beverage/>
             </Box>

        </Grid>
      </Grid>
    </Box>
    </>
  )
}
