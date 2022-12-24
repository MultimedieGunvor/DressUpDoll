import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";
import jakke from "../images/Jakke.png"
import jeans from "../images/Jeans.png"
import kjole from "../images/Kjole.png"
import top from "../images/Top.png"
import minijakke from "../images/Minijakke.png"

const PictureList = [
  {
    id: 1,
    url: jeans,
  },
  {
    id: 2,
    url: jakke,
  },
  {
    id: 3,
    url: kjole,
  },
  {
    id: 4,
    url: top,
  },
  {
    id: 5,
    url: minijakke,
  },
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };


  // Fjerne-funktion skal laves her.
  function reset () { 
    console.log(board);
  }

  return (
    <>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Pictures">
      <button onClick={reset}>Reset</button>
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;