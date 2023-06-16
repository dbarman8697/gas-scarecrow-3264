import styles from "./NavigationTop.module.css";
import { Flex, Box, Image, Input, Button, InputGroup, Grid, GridItem } from '@chakra-ui/react'
import { Link, useSearchParams } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import ProductBox from "../ProductBox/ProductBox";
import { useDispatch, useSelector } from 'react-redux';
import { BiHeart, BiShoppingBag } from 'react-icons/bi'
import { TbDiscount2 } from 'react-icons/tb'
import { useState } from "react";
import NavigationBottom from './NavigationBottom'
import { toggleSearch } from '../../features/Cart/Cart'
import { useEffect } from "react";
import image from "../Navbar/Alvarado1.png"

function NavigationTop
  () {

  const username = useSelector((state) => state.cart.userName)
  console.log("username" + username)
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {

    dispatch(toggleSearch(searchQuery))
    setSearchQuery("")
  }

  useEffect(() => {
    console.log(username)
  }, [username])

  // src/pages/Home.js
  const cart = useSelector((state) => state.cart.cartItems)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return <div>
    <div className={styles.navmain}>
      <Flex className={styles.sugarnavtop}>
        <Box className={styles.menu}   >
          <Box w='fit-content' m='auto' mt='10px' >
            <GiHamburgerMenu color="white" fontSize='20px' />
          </Box></Box>
        <Box className={styles.sugarlogo}>
          <Link to='/'><Image style={{
            padding: "15px ",
            height: "140px",
            width: "1000px",
          }}
            src={image} alt="" /></Link>

        </Box>
        <Box className={styles.searchtop}>
          <InputGroup >
            <Input border='1px solid white' borderRightRadius='0px' onChange={(e) => setSearchQuery(e.target.value)}
              p='0px 15px' color='white' value={searchQuery}
              placeholder='Try liquid lipstick' size='md' variant='unstyled' />
            {/* <IconButton as={FiSearch} size='xs'  w={6} h={6} mr='6px' color='black' bg='white' variant='unstyled'/> */}
            <Link to='/search'><Button leftIcon={<FiSearch />} bg='white' borderLeftRadius='0px' pr=' 25px' pl='10px' variant='unstyled'
              onClick={handleSearch}
            >Search</Button></Link>
          </InputGroup>

        </Box>
        <Box className={styles.searchtop2}></Box>
        <Box className={styles.loginregister}>
          <Link to='/makeup' ><FaUserCircle fontSize='20px' color='white' /></Link>
          {/* <Link as={}  w={6} h={6} mr='6px' color='white' /> */}
          {(username === 'Login/Register') ? <Link to='/login' style={{ color: 'white' }}>Login/Register</Link> : <Link to='/' style={{ color: 'white' }}>{username}</Link>}

        </Box>

        <Box className={styles.icongroup}>
          {/* <Link  as={} size='xs'  w={6} h={6} mr='6px' color='white' variant='unstyled' /> */}
          {/*    <Link   as={} size='xs' w={6} h={6} mr='6px' color='white' variant='unstyled'/> */}
          <Link to='/' ><BiHeart style={{ marginRight: '6px' }} fontSize="20px" color='white' /></Link>
          <div>
            <div className={styles.quantityNum}><p  >{getTotalQuantity() || 0}</p></div>

            <Link to='/cart' ><BiShoppingBag fontSize="20px" style={{ marginRight: '6px' }} color='white' />
            </Link>
          </div>
          <Link to='/' ><TbDiscount2 fontSize='20px' style={{ marginRight: '6px' }} color='white' /></Link>
          {/* <Link as={} size='xs' w={6} h={6} mr='10px' color='white' variant='unstyled'/> */}
        </Box>
      </Flex>
      <NavigationBottom />

    </div>




  </div>





}
export default NavigationTop
  ;