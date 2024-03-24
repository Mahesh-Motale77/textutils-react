import React, {useState} from 'react'

export default function TextForm() {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here ... ")
    return (
        <>
            <div className="mt-5 container">
                <h3>Enter the text to analyze below...</h3>
                <textarea className="mb-4 form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}> Convert to Lowercase</button>
            </div>
            <div className="mt-2 container">
                <h4>Your Text Summary ...</h4>
                <p> {text.split(" ").length} Words and {text.length} Characters </p>
                <p> {0.008 * text.split(" ").length} Minutes read </p>
                <h4>Preview: </h4>
                <p> {text} </p>
            </div>
        </>
    )
}
