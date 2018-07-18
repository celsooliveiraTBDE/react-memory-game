import React from "react";

const styles = {
  panel: {
    margin: 20,
    background: "#e8eaf6"
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  },
  content: {
    padding: 20
  }
};

const Panel = () => (
  <div style={styles.panel}>
    <div style={styles.heading}>Memory Game</div>
    <div style={styles.content}>
  Drink more than once and you must start over! 
    </div>
  </div>
);

export default Panel;
