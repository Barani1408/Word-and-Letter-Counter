import  { useState } from "react";

const WordandLetter = () => {
  const [text, setText] = useState("");

  const letterCount = text.length;

  const wordCount = text.split(/\s+/).filter(Boolean).length;

  const handleChange = (e) =>{
    setText(e.target.value)
  };

  return (
    <div>
      <textarea
        placeholder="Enter your text here...."
        value={text}
        onChange={handleChange}
        rows={5}
        cols={50}
      />

      <p> Words Count  : {wordCount} </p>

      <p> Letters Count : {letterCount} </p>
    </div>
  );
};

export default WordandLetter;
