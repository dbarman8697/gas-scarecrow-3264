import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const ShowEvent = () => {
  return (
    <Box>
      <Card w={"90%"} m={"auto"}>
        <CardBody>
          <Grid
            gridTemplateColumns={"repeat(2, 1fr)"}
            border={"1px solid "}
            gap={"50"}
            justifyContent={"center"}
          >
            <GridItem border={"solid black"} ml={"20"}>
              <Heading as={"h2"} size={"lg"}>
                Event
              </Heading>
              <Card>
                <CardBody></CardBody>
              </Card>
            </GridItem>
            <GridItem border={"solid black"} mr={"20"}>
              <Heading as={"h2"} size={"lg"}>
                Peoples
              </Heading>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ShowEvent;
