import React, { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import "./styles.css";

export function Message({ name }) {
  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        height: '40px',
        backgroundColor: "green",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>{name}</h2>
    </div>
  );
}
