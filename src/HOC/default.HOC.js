//Transforms one component to another component
//adding aditional functionality to existing component

import React from "react";
import { Route } from "react-router-dom";

import DefaultLayout from "../layout/DefaultLayout";

const DefaultHoc = ({ component: Component , ...rest }) => {
  //component
  //props-> path exact
  return(
    <>
    <Route
    {...rest}
    component = {(props) => (
      <DefaultLayout>
      <component {...props} />
      </DefaultLayout>
    )
  }  />
    </>
  )
}

export default DefaultHoc;
