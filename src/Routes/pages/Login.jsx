import { Button, ButtonGroup, Checkbox, Divider, Flex, FormControl, FormLabel, Highlight, HStack, IconButton, Image, Input, Spacer, Spinner, Stack, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/Appcontext';



const Login = () => {

const {LoginUser,
LogOutUser }=useContext(AppContext)


  const [name,SetName] = useState("")

  const [Loading, setLoading] = useState(false);
  const navigatekaro = useNavigate()


  const toast = useToast()

  const handleClick = () => {

    setLoading(true);

    setTimeout(() => {

       
      prompt("ENTER OTP")  
     

      LoginUser(name)
      // LoginUser(name)
     
      navigatekaro("/");
    }, 2000);
  };


const [isLoading, setIsLoading] = useState(true);

setTimeout(() => {
setIsLoading(false)
 
}, 1500);
 



if(isLoading){

 return (  
  
    <h1>b</h1>
   ) 

}



  return (
    <HStack  w="full" >

        <VStack spacing={5} w="100vh" padding={{base:"20px",md:"50px 100px"}}  height="100vh"  >

            <Stack w="full"  textAlign="left">
            <Text marginTop={50} fontSize="xl" fontWeight="semibold">
            Sign IN
            </Text>

            <Text fontSize="sm" >
            <Highlight query='Sign Up' styles={{ color: 'blue', textDecoration:"underline" }}>
            Need a MyGlamm account? Sign Up
            </Highlight>
            
            </Text>
            </Stack>

            <Stack spacing={5}  w="full" >
            <ButtonGroup size='md' isAttached variant='outline'>
                  <IconButton aria-label='Add to friends' ><Image src='https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png' 
                   w={25} /></IconButton>
               <Button w="full" colorScheme="messenger" variant='solid'>
                   Sign In With Google
                </Button>
            
            </ButtonGroup>

            <ButtonGroup size='md' isAttached variant='outline'>
                  <IconButton aria-label='Add to friends' ><Image src='https://media.istockphoto.com/vectors/lock-icon-vector-id936681148?k=20&m=936681148&s=612x612&w=0&h=j6fxNWrJ09iE7khUsDWetKn_PwWydgIS0yFJBEonGow=' 
                   w={25} /></IconButton>
               <Button w="full" bg="blackAlpha.600" color="white" variant='solid'>
               Sign In With Email
                </Button>
            
            </ButtonGroup>
            </Stack>
            
            <HStack spacing={5}  w="full" >

                <Divider minW={1} />
                <Text w="full" fontSize="12px" color="gray.600" >  Or, sign in with email</Text>
                <Divider minW={1} />


            </HStack>

            <Stack spacing={5}  w="full" >
            <FormControl>
              <FormLabel>Email UserName</FormLabel>
              <Input onChange={(e)=>SetName(e.target.value)} value={name} type='name' placeholder='Enter Your UserName' />
             
            </FormControl>

            <FormControl>
              <FormLabel>Email Password</FormLabel>
              <Input type='password' placeholder='Enter Your Password' />
             
            </FormControl>

            <Checkbox defaultChecked>Keep Me Logged in</Checkbox>
            </Stack>

            <Stack textAlign="left" spacing={5}  w="full" >

             <Text fontSize="15px" color="blue" as="u" >Forgot Password</Text>
             <Button onClick={handleClick} w="full" colorScheme="facebook" variant='solid'>

             {!Loading && "Sign IN"}
            {Loading && (
              <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}
                  
                </Button>

            </Stack>
            

        </VStack>


        <VStack  textAlign="left" w="full" padding={100} height="100vh" bg="#ebeef9" display={{base:"none", md:"block"}}  >
           
            <Text marginTop={50} maxWidth={{base:"100%",md:"60%",lg:"60%" }} >
            MYGLAMM REWARDS
            </Text>

            <Image width="500px" src='https://rozmoj.com/wp-content/uploads/2022/06/MyGlamm-Refer-Earn-Free-Makeup-Kits-4-1024x576.webp' />
            <Text  width="full"
            fontSize="18px" fontWeight="semibold" >
             Read More about our Rewards
            </Text>
            <Text  width="full"
            fontSize="15px" fontWeight="thin" maxWidth={{base:"100%",md:"60%",lg:"60%" }} >
            MyGlamm Reward program is one way in which MyGlamm endeavours to reward and thank loyal customers individuals
            </Text>

            <Button onClick={()=>navigatekaro('/rewards')}  colorScheme="messenger" variant='outline'>
             Explore Rewards
           </Button>
        </VStack>



    </HStack>
  )
}

export default Login
