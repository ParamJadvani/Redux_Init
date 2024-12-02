import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_CARTDATA,
  INCREMENT_QTY,
  DECREMENT_QTY,
  DELETE_CARTDATA,
} from "../Redux/ActionType";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const CartPage = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // Adjusted based on state shape

  const handleADD_CARTDATA = () => {
    if (productName && productPrice) {
      dispatch({
        type: ADD_CARTDATA,
        payload: {
          id: Date.now(),
          name: productName,
          price: parseFloat(productPrice),
          qty: 1,
        },
      });
      setProductName("");
      setProductPrice("");
    }
  };

  const totalBill = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <Box p={2} sx={{ maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h4" textAlign="center" mb={2}>
        Cart Page
      </Typography>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Price"
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleADD_CARTDATA}
            disabled={!productName || !productPrice}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>

      {cart.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>{item.qty}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      onClick={() =>
                        dispatch({ type: DECREMENT_QTY, payload: item.id })
                      }
                      // disabled={item.qty <= 1}
                    >
                      -
                    </Button>
                    <Button
                      size="small"
                      onClick={() =>
                        dispatch({ type: INCREMENT_QTY, payload: item.id })
                      }
                    >
                      +
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      onClick={() =>
                        dispatch({ type: DELETE_CARTDATA, payload: item.id })
                      }
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography textAlign="center">No items in the cart.</Typography>
      )}

      {cart.length > 0 && (
        <Typography variant="h6" textAlign="right" mt={2}>
          Total Bill: ${totalBill.toFixed(2)}
        </Typography>
      )}
    </Box>
  );
};

export default CartPage;
