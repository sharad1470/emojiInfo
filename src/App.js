import { useState } from 'react';
import './App.css';

function App() {
  const [word,setWord]=useState("yes");

  const emojiDictionary={
    "😊":"smiling",
    "😂": "Laughter",
    "❤":"Love",
    "😍":"excited"
}
  const emojiList=Object.keys(emojiDictionary);


  const changeHandle=(e)=>{

    var inputKey=e.target.value;
    if(inputKey in emojiDictionary)
      setWord(emojiDictionary[inputKey]);
    else  
      setWord("No data in database");
    }

  const getEmojiName=(emoji)=>{
    setWord(emojiDictionary[emoji]);
  }
  return (
   
    <div className='App'>

      <h1>inside Out!!!</h1>
      <input type='text' 
        onChange={changeHandle}></input>
        
      <h2>{word}</h2>

      {emojiList.map((emoji, index)=>{
         return <span
          key={emoji}
          onClick={()=>{getEmojiName(emoji)}}
          style={{padding:"0.5rem" ,fontSize:"2rem",cursor:"pointer"}}
         >{emoji}
         </span>
      }
      )}
         
        
      
    </div>
  );
}

export default App;
