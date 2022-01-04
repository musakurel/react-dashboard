import React from 'react';
import { Card } from "antd";
const Desc = () => {
  const CardStyle = {
    backgroundColor: "#283046",
    color: "white",
    border: "none",
    borderRadius: "5px",
    width: "100%",
    height: "20vh",
  };


  return (
    <div>
      
      <Card style={{ ...CardStyle }}>
        
          <h3>Title</h3>
          <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra nulla quis .



</span>

      </Card>
      
    </div>
  );
};

export default Desc;
