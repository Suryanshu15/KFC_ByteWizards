import {
  Grid,
  Card,
  CardBody, 
  Image,
  Center,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import products from './homeProduct'


export default function App() {
  return (
    <>
    <div className="w-4/5	ml-8 sm:ml-20 md:ml-24 lg:ml-36">
      <Grid
        m="10"
        spacing={4}
        align="center"
        templateColumns={{
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(4,1fr)"
        }}
      >
        {products.map((el) => {
          return (
          < >
            <Center  > 
            <Card maxW="sm" className="hover:bg-gray-200" >
              <Link to="/menu">
              <CardBody className="w-full h-full">
                <Image src={el.src} alt={el.id} borderRadius="lg" />
                <Center><Heading fontSize='md' p="3" pt="5">{el.name}</Heading></Center>               
              </CardBody>
              </Link>
            </Card>
            </Center>
            </>
          );
        })}
       </Grid>
      </div>
    </>
  );
}

// npm i
