import React, { useState } from "react";
import style from "./section.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/todoSlice";
import { v4 } from "uuid";
import ListTodo from "../../listTodo/ListTodo.jsx";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Speech from "./MicroComponent/Speech";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



const Section = () => {
  const [text, setText] = useState("");

  const disp = useDispatch();

  const {
    transcript,
    browserSupportsSpeechRecognition, 
  }=useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  
  const start =()=>{
    return SpeechRecognition.startListening;
  }

  const handleMessage = (e) => {
    setText(e.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      disp(addItem(dataTodo));
      setText("");
    }
  };

  const dataTodo = {
    text,
    id: v4(),
    transcript
  
  };

  setTimeout(()=>{
    disp(addItem(dataTodo));
  },2000)

  return (
    <section className={style.section}>
     <MenuOutlinedIcon id={style.burger}/>
      <div className={style.search}>
        <TextField
          onChange={handleMessage}
          onKeyPress={handleKeyPress}
          value={text}
          style={{ width: "70%" }}
          id="standard-basic"
          label="Введите задачу...."
          variant="standard"
        />
        {text == "" ? (<>
          <Button variant="outlined" disabled>
            Добавить
          </Button>
         
         </>
        ) : (
          <>
          <Button
            onClick={() => {
              disp(addItem(dataTodo));
              setText("");
            }}
            variant="outlined"
          >
            Добавить
          </Button>

         </>

        )}
        <Speech funcStart={start}/>
          </div>
          <ListTodo /> 
    </section>
  );
};

export default Section;
