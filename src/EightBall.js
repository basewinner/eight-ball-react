import React, { useState } from "react";
import "./EightBall.css";

const choice = (arr) => {
  const randomIdx = Math.floor(Math.random() * arr.length);
  console.log(randomIdx);
  return arr[randomIdx];
}



const EightBall= (props) => {
  const [msg, setMsg] = useState("Think of a Question.");
  const [color, setColor] = useState("black");
  const [idx, setIdx] = useState(0);

 const handleClick= () => {
    const { idx, msg, color } = choice(answers);
    setIdx(idx);
    setMsg(msg);
    setColor(color);
  }
  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      <h4>{idx}</h4>
      <b>{msg}</b>
    </div>
  );
}

const answers = [
    { idx:1, msg: "It is certain.", color: "green" },
    { idx:2, msg: "It is decidedly so.", color: "green" },
    { idx:3,  msg: "Without a doubt.", color: "green" },
    { idx:4, msg: "Yes - definitely.", color: "green" },
    { idx:5, msg: "You may rely on it.", color: "green" },
    { idx:6, msg: "As I see it, yes.", color: "green" },
    { idx:7, msg: "Most likely.", color: "green" },
    { idx:8, msg: "Outlook good.", color: "green" },
    { idx:9, msg: "Yes.", color: "green" },
    { idx:10, msg: "Signs point to yes.", color: "goldenrod" },
    { idx:11, msg: "Reply hazy, try again.", color: "goldenrod" },
    { idx:12, msg: "Ask again later.", color: "goldenrod" },
    { idx:13, msg: "Better not tell you now.", color: "goldenrod" },
    { idx:14, msg: "Cannot predict now.", color: "goldenrod" },
    { idx:15, msg: "Concentrate and ask again.", color: "goldenrod" },
    { idx:16, msg: "Don't count on it.", color: "red" },
    { idx:17, msg: "My reply is no.", color: "red" },
    { idx:18, msg: "My sources say no.", color: "red" },
    { idx:19, msg: "Outlook not so good.", color: "red" },
    { idx:20, msg: "Very doubtful.", color: "red" }
  ];

export default EightBall;
