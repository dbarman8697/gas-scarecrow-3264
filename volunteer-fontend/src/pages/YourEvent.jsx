import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

function YourEvent() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { id } = useParams();

  const getData = async () => {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDhjYjVhOTUwMGQ0NDQ1ZmFjODI0MmYiLCJhZ2VuY3luYW1lIjoiY2hldGFuIiwiaWF0IjoxNjg3MDM2MTg0LCJleHAiOjE2ODc2NDA5ODR9.pU2wdkRNQof8UVGoblA8X6GAH4SaqP_jzFVhCqL3PZI";
    try {
      let req = await axios.get(
        `https://real-teal-hen-boot.cyclic.app/agency/getallevents`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const newdata = req.data.events.filter((el, ind) => {
        return el._id === id;
      });
      setData(newdata[0]);
      //  setData(newdata[0]);
      //  setTitle(newdata[0].title);
      //  setBody(newdata[0].body);
      //  setCategory(newdata[0].category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box w={"90%"} m={"auto"} display={"flex"} justifyContent={"space-around"}>
      <Card w={"60%"}>
        <CardBody>
          <Flex justifyContent={"space-around"}>
            <Box>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAu_5ErTpXS_oZwPXgBxKLX9rf5DfhEmhZg&usqp=CAU"></Image>
            </Box>
            <Box textAlign={"left"}>
              <Heading as={"h3"} size={"md"}>
                Agency Name : {data.name}
              </Heading>
              <Text> Description : {data.description}</Text>
              <Text> Location : {data.location}</Text>
              <Text> Category : {data.cagtegory}</Text>
              <Text> Time : {data.time}</Text>
              <Text> Phone : {data.phone}</Text>
              <Text>Required Volunteers : {data.requiredVolunteers}</Text>
            </Box>
          </Flex>
        </CardBody>
      </Card>
      <Card w={"30%"}>
        <CardBody
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Text>
              It will be great opportunity to learn something
              <br /> new while helping us!!
            </Text>
            <br />
            <Box>
              <Button colorScheme="red" onClick={onOpen}>
                I Want To Help{" "}
              </Button>
            </Box>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Thank you ✅</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Thank you for registering as a Volunteer 🥳.{" "}
                  <b>We'll get back to you via mail,</b>
                  Keep helping us. 🥳✅
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                  <Button
                    onClick={() => navigate("/")}
                    colorScheme="blue"
                    ml={"2"}
                  >
                    Back to Home Page
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}

export default YourEvent;
/*
cagtegory: "Health"
description: "help others"
location: "new Delhi"
name: "Nasa"
phone: 123456789
requiredVolunteers: 5
time: "12:00pm"
*/
