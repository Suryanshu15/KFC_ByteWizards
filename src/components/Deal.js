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
  
  const arrObj = [
    {
      src:
        "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=31.74",
      name: "1 Pc free Chicken...",
      desc:"1Pc free Chicken Zinger on a cart value of 499 or above on first order.",
      id: 1
    },
    {
      id: 2,
      src:
        "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=31.74",
      name: "1 Pc free Chicken..",
      desc:"1Pc free Chicken Zinger on a cart value of 499 or above on first order."
    },
    {
      id: 3,
      src:
        "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/ADDCHK99.jpg?ver=31.74",
      name: "1 Pc free Veg..",
      desc:"Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or..."
    },
    {
      id: 4,
      src:
        "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=31.74",
      name: "Add 2 Pc Hot n..",
      desc:"1Pc free Chicken Zinger on a cart value of 499 or above on first order."
      
    },
    {
      id: 5,
      src:
        "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=31.74",
  
      name: "Upto Rs 100 off on..",
      desc:"Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order..."
    }
    ,
   
  
  ];
  
  const Deal = () => {
    return (
      <>
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
          {arrObj.map((el) => {
            return (
            < >
              <Center  > 
              <Card maxW="lg" >
                <Link to="/deal">
                <CardBody >
                  <Image src={el.src} alt={el.id} borderRadius="lg" />
                  <Center><Heading fontSize='md' p="3" pt="5">{el.name}</Heading></Center>               
                  <Text>{el.desc}</Text>
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