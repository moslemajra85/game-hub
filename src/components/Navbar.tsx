import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.svg"
 
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize='70px'/>
      <Text>Gamer</Text>
         
    </HStack>
  )
}

export default Navbar