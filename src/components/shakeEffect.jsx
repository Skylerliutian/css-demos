import React, { useState } from "react";
import "./shakeEffect.css";

const ShakeEffect = () => {
  const [shake, setShake] = useState(false);
  return (
    <input
      className={shake ? "apply-shake" : ""}
      placeholder="请输入文字"
      onClick={() => {
        setShake(true);
        setTimeout(() => {
          setShake(false);
        }, 820);
      }}
    ></input>
  );
};

export default ShakeEffect;
