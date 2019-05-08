import React from "react";

function Item(props) {
  const { item } = props;
  console.log(item);
  return <div>Item</div>;
}

export default Item;
