 
  const element = document.getElementById('main-container');
      element.style.backgroundImage = "linear-gradient(230deg, #333, #00ff6c, #e3f9ff, orange)";
      
   var ddMenu = document.getElementById("dd-content");
          ddMenu.style.maxWidth = "0px";
        
      function dropDown() {
        
        if (ddMenu.style.maxWidth == "0px")
        {
          ddMenu.style.maxWidth = "350px";
          ddMenu.style.visibility = "visible";
        }
        else  {
          ddMenu.style.maxWidth = "0px";
          ddMenu.style.visibility = "hidden";
        }
      }
      
      /// event listeners for the background gradient section
      
    const btn1 = document.querySelector(".box:nth-of-type(1)");
    const btn2 = document.querySelector(".box:nth-of-type(2)");
    const btn3 = document.querySelector(".box:nth-of-type(3)");
    const btn4 = document.querySelector(".box:nth-of-type(4)");
    const btn5 = document.querySelector(".box:nth-of-type(5)");
    console.log(btn1);
    console.log(btn2);
    console.log(btn3);
    console.log(btn4);
    console.log(btn5);
    // console.log(element.style.transition = "all 0.5s")
 btn1.onclick = function(){
   element.style.transition = "background-image ease-in-out 2s";
   element.style.backgroundImage = "linear-gradient(340deg, #00ffff, #fbec5d, #4b5320, #fe6f5e)";
      // element.style.transition = "0.5s"
    };
 btn2.onclick = function(){
      element.style.backgroundImage = "linear-gradient(230deg, #e52b50, #ffbf00, #9966cc, #8db600)";
    };
 btn3.onclick = function(){
      element.style.backgroundImage = "linear-gradient(170deg, #fffdd0, #dc143c, #00ffff, #e75480)";
    }
 btn4.onclick = function(){
      element.style.backgroundImage = "linear-gradient(150deg, #b22222, #ff00ff, #ffd700, #daa520)";
    }
 btn5.onclick = function(){
      element.style.backgroundImage = "linear-gradient(230deg, #333, #00ff6c, #e3f9ff, orange)";
    }
  
  

  