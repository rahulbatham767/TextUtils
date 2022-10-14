import React,{useState} from 'react'

export const TextForm = (props) => {

    const handleupClick=()=>{
            let newText=Text.toUpperCase();
      settext(newText);
      if(Text.length===0){
      alert('Please enter a text first');
      }
      else{
      props.show("Coverted to Uppercase","success");
      }
    }
    const handledownClick=()=>{
      let newText=Text.toLowerCase();
      settext(newText);
      if(Text.length===0){
        alert('Please enter a text first');
        }
        else{
      props.show("Coverted to LowerCase","success");
        }
    }


    const handleonChange=(event)=>{
        console.log("On change");
        settext(event.target.value);
    }

    const Clear=()=>{
        settext("");
    }
    const Speak=()=>{
      const say=new window.SpeechSynthesisUtterance();
        say.lang='en-US';
       say.text=Text;
       say.speed=2.5;
       window.speechSynthesis.speak(say);
  
    }

    const Copy=()=>{

navigator.clipboard.writeText(Text);
    }
   

 const [Text, settext] = useState("Enter Text Here..");

  return (
    <><div className="container my-3">
        <h3 className={` text-${props.mode==='dark'?'dark':'light'}`}>{props.heading}</h3>
<div className="mb-3 my-3">
   <textarea className="form-control" id="mybox" rows="8"
   value={Text} onChange={handleonChange} style={(props.mode==="light")?{backgroundColor:"white",color:'black'}:
  {backgroundColor:"gray",color:'white'}
  }
   ></textarea>
</div>
<button className="btn btn-primary" onClick={handleupClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-1 my-1"onClick={handledownClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-1 my-1"onClick={Speak}>Speak</button>
<button className="btn btn-primary mx-1 my-1"onClick={Copy}>Copy Text</button>
<button className="btn btn-primary mx-1 my-1"onClick={Clear}>Clear</button>
</div>

<div className="container">
    <h3>Your text Summary</h3>
    <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
    <p>{0.008 * Text.split(" ").length} Minutes read </p>

    <h4>Preview</h4>
    <p>{Text.length>0?Text:"Enter Something Here to Preview"}</p>
</div>
</>
     
  )
}

















