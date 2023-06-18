import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);

  //this function will be called when the page is loaded and it will get all the events of the agency
  const getEvents = async () => {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDhjYjVhOTUwMGQ0NDQ1ZmFjODI0MmYiLCJhZ2VuY3luYW1lIjoiY2hldGFuIiwiaWF0IjoxNjg3MDM2MTg0LCJleHAiOjE2ODc2NDA5ODR9.pU2wdkRNQof8UVGoblA8X6GAH4SaqP_jzFVhCqL3PZI";
    const res = await axios.get(
      "https://real-teal-hen-boot.cyclic.app/agency/getallevents",
      {
        // use this token to get all events of agency for testing
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setEvents(res.data.events);
    console.log(res.data.events);
  };

  //this function will be called when the page is loaded
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <DIV style={{ paddingLeft: "12%", paddingRight: "12%" }}>
      {events.map((event) => {
        return (
          <div id="outer">
            <div id="main_info">
              <img
                src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="img"
              />
              <div
                style={{
                  width: "75%",
                  // border: "1px solid Black",
                  paddingLeft: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "20px",
                  }}
                >
                  <h2>{event.name}</h2>
                  <h2>{event.cagtegory}</h2>
                </div>
                <h2 style={{ textAlign: "left" }}>{event.description}</h2>
                <h3 style={{ textAlign: "left" }}>
                  Location:- {event.location}
                </h3>
              </div>
            </div>
            <div id="timeinfo">
              <div style={{ backgroundColor: "#9e989d" }}>{event.date}</div>
              <div style={{ backgroundColor: "#8d868c" }}>{event.time}</div>
              <div style={{ backgroundColor: "#7b747a" }}>
                {event.requiredVolunteers}
              </div>
            </div>
            <Link to={`${event._id}`}>
              <div id="view">View Event</div>
            </Link>
          </div>
        );
      })}
    </DIV>
  );
};

export default Events;

const DIV = styled.div`
  #outer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid black; */
    background-color: #f1f1f1;
    margin: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  img {
    width: 200px;
    height: 200px;
  }
  #main_info {
    display: flex;
    gap: 10px;
    /* border: 1px solid black; */
    padding: 30px;
  }
  #timeinfo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    color: white;
  }
  #timeinfo div {
    padding: 10px;
  }
  #view {
    background-color: #05abc4;
    color: white;
    padding: 10px;
  }
`;
