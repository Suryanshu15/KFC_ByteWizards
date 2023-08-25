import {
    Grid,
    Card,
    CardBody, 
    Image,
    Center,
    Text,
    Heading,
    CardFooter,
    Button,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import Deals from './Deals'
  import carosal from '../components/carousal/carosal.component'
  
  
  
  const Deal = () => {
    return (
      <>
      <div>
        <carosal />
      </div>
      <div className="h-28 flex justify-center items-center " >
        <h1 className="text-white font-bold">Welcome, Enjoy Your Deals</h1>
      </div>
      <div ml={{sm: "2px", md:"20px", lg:"60px"}}>
        <Grid
          m="10"
          spacing={4}
          
          templateColumns={{
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)"
          }}
        >
          {Deals.map((dl) => {
            return (
            < >
              <Center  > 
              <Card maxW="sm " >
                <Link to="/deal">
                <CardBody >
                  <Image src={dl.src} alt={dl.id} borderRadius="lg" />
                  <Center><Heading fontSize='md' p="3" pt="5">{dl.name}</Heading></Center>               
                  <Text>{dl.desc}</Text>
                </CardBody>
                <CardFooter >
                    <Text className=" w-48 underline decoration-2">
                        Reedem
                    </Text>
                    <Button className="bg-sky-500 border-solid border-2">View Details</Button>
                </CardFooter>
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

  export default Deal;