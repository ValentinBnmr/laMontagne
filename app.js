const navBar = document.querySelector("nav");
const mainTitle = document.querySelector("h1");
const totalHeight = document.body.scrollHeight - window.innerHeight;


window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    // progress.style.height = progressHeight + "%";
    if (progressHeight > 4) {
            navBar.classList.add("reducNavBar")
            mainTitle.style.fontSize = "25px"
            mainTitle.style.marginTop = "10px"
            
            

        

    }
    else {
        navBar.classList.remove("reducNavBar")
        mainTitle.style.fontSize = "35px"
        mainTitle.style.marginTop = "20px"
    }
    console.log(progressHeight);
  };