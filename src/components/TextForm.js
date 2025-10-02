import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase","success");
    }
    const handleLoClick = () => {
        //console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success");
    }
     const handleClearClick = () => {
        //console.log("Uppercase was Clicked" + text);
        let newText = "";
        setText(newText)
         props.showAlert("The text cleared","success");
    }
   const [remaining, setRemaining] = useState(20000);

const handleCountClick = () => {
    setRemaining(20000 - text.length);
     props.showAlert("Shows the remaining space","success");
}

     const handleOnChange = (event) => {
       // console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText] = useState('');

    //copy function
    //remove extra spaces function
   // text="new text";//wrong way to update the text in react
    //setText("new Text");//correct way to update the text in React
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
                color:props.mode==='dark'?'white':'#042743',backgroundImage: "none"
            }} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
             <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
             <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
              <button className='btn btn-primary mx-1' onClick={handleCountClick}>Count Characters</button>
    </div>
    <div className="container my-2"  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes per Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text:"Enter something to preview it"}</p>
        <p>Characters remaining: {remaining}</p>
    </div>
    </>
  )
}
