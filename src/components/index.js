import React, { useState } from "react";
// import MagicLine from "./magicLine";
import NavBar from "./navbar1";
import DeleteButton from "./deleteButton";
import ShakeEffect from "./shakeEffect";
import ScrollNum from "./scrollNum";

const Index = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      {/* <NavBar></NavBar> */}
      <ScrollNum num={num} />
      <button
        onClick={() => {
          setNum(Math.floor(Math.random() * 10));
        }}
      >
        123
      </button>
      {/* <MagicLine /> */}
    </>
  );
};

export default Index;
