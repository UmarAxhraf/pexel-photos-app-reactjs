import React, { useState } from "react";

const Buttonlist = [
  { id: 1, title: "Home" },
  { id: 2, title: "Videos" },
  { id: 3, title: "Leaderboard" },
  { id: 4, title: "Challanges" },
];

const Main = () => {
  const [selected, setSelected] = useState(1);

  const handleColor = (row) => {
    setSelected(row.id);
  };

  return (
    <div className="maincontainer">
      {Buttonlist.map((list) => (
        <button
          className="buttonmain"
          key={list.id}
          onClick={() => handleColor(list)}
          style={{ backgroundColor: list.id === selected ? "#0b1116" : "" }}
        >
          {list.title}
        </button>
      ))}
      {/* <button className="buttonmain1">Home</button>
      <button className="buttonmain1">videos</button>
      <button className="buttonmain1">Leaderboard</button>
      <button className="buttonmain1">Challanges</button> */}
    </div>
  );
};

export default Main;
