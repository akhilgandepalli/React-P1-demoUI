import { useState } from "react";

const Slideshow = () =>{
  const [action, setAction]=useState(0)
  const data = [
    {
      image:"./slide-1.png"
    },
    {
      image:"./slide-2.webp"
    },
    {
      image:"./slide-3.jpg"
    },
    {
      image:"./slide-4.avif"
    },
    {
      image:"./slide-5.webp"
    }
  ]
  // function shSlides() {
  //   for (let i = 0; i < slides.length; i++) {
  //     slides[i].className = slides[i].className.replace(' show', ' hide');  
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {slideIndex = 1}    
  //   // for (let i = 0; i < dots.length; i++) {
  //   //   dots[i].className = dots[i].className.replace(" active", "");
  //   // }
  //   slides[slideIndex-1].className = slides[slideIndex-1].className.replace(' hide',' show');
  //   // dots[slideIndex-1].className += " active";
  //   setTimeout(showSlides, 2000);
  // }
  function showSlides(){
    setTimeout(()=>{
      if(action>=data.length-1){
        setAction(0);
      }else{
        setAction(action+1);
      }

    },2000)
    return(
      data.map((e,i)=>{
        return(
          <div className={action===i ? 'slides show' : 'slides hide'} >
            <img src={e.image} />
          </div>
        )
      })
    )
  }

return(
      <main>
          <div className="slideshow-container">
            {showSlides()}
            <a className="prev">❮</a>
            <a className="next">❯</a>
          </div>
          <div className="dot-container">
            <span className="dot"></span> 
            <span className="dot"></span> 
            <span className="dot"></span>
            <span className="dot"></span> 
            <span className="dot"></span> 
          </div>
      </main>
  )
}
export { Slideshow };