import React, {useState} from 'react'

export default function TextForm() {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
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
                <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase</button>
            </div>
        </>
    )
}
