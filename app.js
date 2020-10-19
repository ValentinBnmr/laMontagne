const navBar = document.querySelector("nav");
const mainTitle = document.querySelector("h1");
const goTop = document.querySelector("#goTop");
const totalHeight = document.body.scrollHeight - window.innerHeight;


window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    // progress.style.height = progressHeight + "%";
    if (progressHeight > 0) {
            navBar.classList.add("reducNavBar")
            mainTitle.style.fontSize = "25px"
            mainTitle.style.marginTop = "10px"
            goTop.style.display = "flex";
            
            

        

    }
    else {
        navBar.classList.remove("reducNavBar")
        mainTitle.style.fontSize = "35px"
        mainTitle.style.marginTop = "20px"
        goTop.style.display = "none"
    }
    console.log(progressHeight);
    console.log(window.pageXOffset)
    console.log(totalHeight);
  };

  goTop.addEventListener('click', ()=>{
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
      })
  })