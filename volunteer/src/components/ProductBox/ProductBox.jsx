import styles from "./ProductBox.module.css";
import { IconButton, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function ProductBox(props) {
  return (
    <div>
      <div className={styles.imageCss2}>
        <Link to={`/${props.catg}/${props.id}`}>
          <img src={props.url} alt="img" />
        </Link>
        <div className={styles.productDescription}>{props.description}</div>
        <Box w="fit-content" display="flex" m="auto" gap="6px">
          <Text color="green">{props.rating}</Text>
        </Box>
        <div className={styles.productPrice}>₹{props.price}</div>
        <div className={styles.buttongrp}></div>
      </div>
    </div>
  );
}
export default ProductBox;
