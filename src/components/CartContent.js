import React, { useState,useEffect } from "react";
import { Menu, Badge, Popover, Divider, Button } from "antd";
import { Icon } from "@iconify/react";
import API from "./DATA";
const ButtonGroup = Button.Group;




const CartContent = () => {
  const [cart, setCart] = useState([]);



  const getData=()=>{
    fetch('/items.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        setCart(myJson.shopping_cart_items);
      });
  }
  useEffect(()=>{
    getData()
  },[])
console.log(cart)

  //INCREASE CART PRODUCT QUANTITY
  const increaseQuantity = (i) => {
    setCart((prevCart) =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      })
    );
  };
  //DECREASE CART PRODUCT QUANTITY
  const decreaseQuantity = (i) => {
    setCart((prevCart) =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        }
        return item;
      })
    );
  };
  // REMOVE PRODUCT FROM CART
  const removeFromCart = (i) => {
    setCart((prevCart) =>
      prevCart.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            count: 0,

            inCart: false,
          };
        }
        return item;
      })
    );
  };
  // COMPLETE CART
  const completeCart = () => {
    alert("Order completed!");
    setCart((prevCart) =>
      prevCart.map((item) => {
        
          return {
            ...item,
            count: 0,

            inCart: false,
          };
        })
    );
  };

  // CART VARIABLES
  const cartCountTotal = cart.reduce((acc, item) => acc + item.count, 0);
  const cartPriceTotal = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  // CART TOTAL
  const cartTotals = () =>
    cartCountTotal === 0 ? (
      <b>Cart is empty</b>
    ) : (
      <>
        <p>
          $
          {Number.isInteger(cartPriceTotal)
            ? cartPriceTotal
            : cartPriceTotal.toFixed(2)}
        </p>
      </>
    );

  //CART TITLE SECTION
  const text = (
    <div className="cart-title">
      <span>My Cart</span>
      <Badge
        style={{
          backgroundColor: "rgb(255,255,255,.08)",
          border: "none!important",
          boxShadow: "none",
          color: "#7367f0",
          fontWeight: "bold",
        }}
        offset={[-30, 3]}
        count={cartCountTotal + " items"}
      ></Badge>
    </div>
  );
  // CART CONTENTS
  const content = (
    <div className="cart-content">
      {cart.map((items, i) => {
        if (items.inCart) {
          return (
            <div key={items.name}>
              <div className="cart-item">
                <p>{items.name}</p>
                <ButtonGroup>
                  <Button
                    onClick={() => increaseQuantity(i)}
                    size="small"
                    ghost
                  >
                    <Icon style={{}} icon="fe:plus" />
                  </Button>
                  <Button size="small" ghost>
                    <p>{items.count}</p>
                  </Button>

                  <Button
                    onClick={() => decreaseQuantity(i)}
                    size="small"
                    ghost
                  >
                    <Icon style={{}} icon="fe:minus" />
                  </Button>
                </ButtonGroup>
                <h4>
                  $
                  {Number.isInteger(items.count * items.price)
                    ? items.count * items.price
                    : `${(items.count * items.price).toFixed(2)}`}
                </h4>
                <Button onClick={() => removeFromCart(i)} size="small" ghost>
                  <Icon style={{}} icon="bi:x" />
                </Button>
              </div>
              <Divider
                style={{
                  backgroundColor: "#a0a0a1",
                  width: "100%",
                  opacity: "0.5",
                  margin: "0px 0px",
                }}
              />
            </div>
          );
        }
      })}

      <div className="cart-total">
        <p>Total:</p>

        <span>{cartTotals()}</span>
      </div>
      <div className="cart-button">
        <Button onClick={() => completeCart()} type="primary" block>
          Checkout
        </Button>
      </div>
    </div>
  );

  return (
    <Popover
      style={{ backgroundColor: "#283046!important" }}
      placement="bottomLeft"
      title={text}
      content={content}
      trigger="click"
    >
      <Menu.Item
        key="cart"
        icon={
          <Badge
            style={{
              backgroundColor: "#7367f0",
              border: "none!important",
              boxShadow: "none",
            }}
            count={cartCountTotal}
          >
            <Icon
              style={{ color: "#d0d2d6" }}
              icon="feather-shopping-cart"
              height={20}
            />{" "}
          </Badge>
        }
      ></Menu.Item>
    </Popover>
  );
};

export default CartContent;
