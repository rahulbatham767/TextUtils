import React from 'react'

export const About = (props) => {
  //     const [btntext, setBtntext] = useState("Enable Dark Mode");
  //  const [mystyle,setMystyle] = useState({

  //     color:"white",
  //     backgroundColor:"black"
  // })

  let myStyle = {
    color: props.mode === 'dark' ? "white" : "purple",
    backgroundColor: props.mode === 'dark' ? "gray" : "#7676ff",
  }

  return (
    <>
      <div className="container my-3">
        <h3>About Us</h3>
        <div className="accordion" id="accordionExample" style={myStyle} >
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                TextUtils
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}  >
                <strong>TextUtils is a text based web application which is maded to perform some specific
                  operation on text. <br />
                  You Can use TextUtils for  Converting lowercase letter to Upper case,Upper case to lowercase,Speak out the written Content,Copy text.<br />
                  With the help of TextUtils You can check your own typing speed.
                </strong>

              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={myStyle} aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle} >
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={myStyle} aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
