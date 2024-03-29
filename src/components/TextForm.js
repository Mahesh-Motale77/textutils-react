import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        let text = document.getElementById("myTextArea");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here ... ")
    return (
        <>
            <div className="mt-5 container" style={{color: props.mode==='light'?'#042743':'white'}}>
                <h3>Enter the text to analyze below...</h3>
                <textarea className="mb-4 form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'#042743':'white'}} id="myTextArea" rows="10"></textarea>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}> Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="mt-2 container" style={{color: props.mode==='light'?'#042743':'white'}}>
                <h4>Your Text Summary ...</h4>
                <p> {text.split(" ").length} Words and {text.length} Characters </p>
                <p> {0.008 * text.split(" ").length} Minutes read </p>
                <h4>Preview: </h4>
                <p> {text} </p>
            </div>
        </>
    )
}
