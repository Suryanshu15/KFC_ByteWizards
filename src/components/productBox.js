import {
  Grid,
  Card,
  CardBody, 
  Image,
  Center,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const arrObj = [
  {
    src:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT224.jpg?ver=31.74",
    name: "VALUE SNACKERS",
    id: 1
  },
  {
    id: 2,
    src:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=31.74",
    name: "CHICKEN ROLLS"
  },
  {
    id: 3,
    src:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT233.jpg?ver=31.74",
    name: "PERI PERI CHICKEN"
  },
  {
    id: 4,
    src:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=31.74",
    name: "CHICKEN BUCKET"
    
  },
  {
    id: 5,
    src:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=31.74",

    name: "BIRIYANI BUCKETS",
    
  },
  {
    id: 6,
    src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=31.74",
    name: "BOX Meal",
    
  },
  {
    id: 7,
    src:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=31.74",
    name: "BURGGER",
    
  },
  {
    id: 8,
    src:"https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg",
    name: "BOX Meal",
    
  }
 

];

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
        {arrObj.map((el) => {
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
