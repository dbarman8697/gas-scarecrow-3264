import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowEvent from "./ShowEvent";

const EventPage = () => {
  //     name: String,
  //     cagtegory: String,
  //     date: String,
  //     time: String,
  //     phone: Number,
  //     requiredVolunteers: Number,
  //     location: String,
  //     description: String,

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);
  const [reqVol, setReqVol] = useState(0);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    const details = {
      name,
      category,
      date,
      time,
      phone,
      reqVol,
      location,
      description,
    };
    console.log("Working fine and this is your data", details);
  };

  return (
    <Box>
      <nav className="top-navbar">
        <div className="left-links">
          <Link to="/" className="top-nav-link">
            Who We Are
          </Link>
          <Link to="/" className="top-nav-link">
            Who We Serve
          </Link>
        </div>
        <div className="right-links">
          <Link to="/" className="top-nav-link">
            Logout
          </Link>
        </div>
      </nav>
      <Heading as={"h2"} size={"xl"}>
        Add Event
      </Heading>
      <Card w={"40%"} m={"auto"} p={"5"}>
        <CardBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel>Category</FormLabel>
            <Input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <FormLabel>Time</FormLabel>
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <FormLabel>Phone</FormLabel>
            <Input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FormLabel>Required Volunteers</FormLabel>
            <Input
              type="number"
              value={reqVol}
              onChange={(e) => setReqVol(e.target.value)}
            />
            <FormLabel>Location</FormLabel>
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              w={"50%"}
              mt={"10"}
              type="Submit"
              bgColor="blue.200"
              cursor={"pointer"}
              onClick={handleAdd}
            >
              Add Event
            </Button>
          </FormControl>
        </CardBody>
      </Card>
      <Box>
        <ShowEvent />
      </Box>
    </Box>
  );
};

export default EventPage;

// name: String,
//     cagtegory: String,
//     date: String,
//     time: String,
//     phone: Number,
//     requiredVolunteers: Number,
//     location: String,
//     description: String,
