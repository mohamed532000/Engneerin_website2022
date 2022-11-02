let linkShowMore = document.getElementById("show more");
let divMoreLinks = document.getElementById("divMoreLinks");

linkShowMore.onclick = ()=>{
    divMoreLinks.style.marginLeft= "0";
    divMoreLinks.style.opacity = 1;
    divMoreLinks.style.width = "230px"


    divMoreLinks.onmouseleave = ()=>{
        divMoreLinks.style.marginLeft = "-30%";
        divMoreLinks.style.opacity = 0;
        divMoreLinks.style.width = 0;
    }
}



// icon who toggel a list of links website

let togel = document.getElementById("togel");
let links = document.getElementById("links");
let firstContainer = document.getElementById("auto");



// call all sections from html file 

let aboutSection = document.getElementById("about-section");
let portfolioSection = document.getElementById("portfolio-section");
let teamSection = document.getElementById("team-section");
let newsSection = document.getElementById("news-section");
let servicesSection = document.getElementById("services-section");
let projectSection = document.getElementById("project-section");
let contactSection = document.getElementById("contact-section");
let footerSection = document.getElementById("footer-section");
let toggelLinks = document.getElementById("togel");
let otherServBoxes = document.getElementById("otherServBoxes")


// boxes of all sections

let aboutBoxes = document.querySelectorAll(".text-boxes .box");
let portfolioBoxes = document.querySelectorAll(".container .port-box");
let teamBoxes = document.querySelectorAll(".container .team-box");
let newsBoxes = document.querySelectorAll(".news-boxes .new-box");
let servicesTextBox = document.getElementById("serv-text");
let servicesImageBox = document.getElementById("serv-image");
let otherBoxes = document.querySelectorAll(".other-serv-boxes .other-box");
let projectBoxes = document.querySelectorAll(".container .project-box");
let contactBoxes = document.querySelectorAll(".container .contact-box");
let footerTop = document.getElementById("footer-top");
let footerBoxes = document.querySelectorAll(".container .footer-box");
let contactForm = document.getElementById("form");
let contactIconsDiv = document.getElementById("contact-icons");



// function to visible and hide other links of nav bar

togel.onclick = ()=>{
    links.classList.toggle("links");
};

window.onscroll = () =>{

    if(window.scrollY >= aboutSection.offsetTop) {
        firstContainer.style.backgroundColor = "var(--main-color)";
        aboutBoxes.forEach((AboutBox)=>{
            AboutBox.style.marginLeft = 0;
            AboutBox.style.opacity = 1;
        })
    }else {
        firstContainer.style.backgroundColor = "transparent";
        aboutBoxes.forEach((AboutBox)=>{
            AboutBox.style.marginLeft = "-300%";
            AboutBox.style.opacity = 0;
        })
    }



// for portfolio section ##################################################################



    if(window.scrollY >= portfolioSection.offsetTop) {
        portfolioBoxes.forEach((portBox)=>{
            portBox.style.left = 0;
            portBox.style.opacity = 1;
            portBox.style.transition = portBox.getAttribute("transition")
        })
        toggelLinks.style.color = "white";
    }else {
        portfolioBoxes.forEach((portBox)=>{
            portBox.style.left = "-300%";
            portBox.style.opacity = 0;
            portBox.style.transition = portBox.getAttribute("transition")
        })
    }


    
// for services section ##################################################################


if(window.scrollY >= servicesSection.offsetTop) {

    //change background of the navbar when arrive on services section
    firstContainer.style.backgroundColor = "var(--second-color)";
    toggelLinks.style.color = "white";

    // moving for service image div and change opacity
    servicesImageBox.style.left = 0;
    servicesImageBox.style.opacity = 1;

    // moving for service text div and change opacity
    servicesTextBox.style.right = 0;
    servicesTextBox.style.opacity = 1;
}else {
    
    // hide for service image div and change opacity
    servicesImageBox.style.left = "-300%";
    servicesImageBox.style.opacity = 0;
    
    // hide for service text div and change opacity
    servicesTextBox.style.right = "-200%";
    servicesTextBox.style.opacity = 0;
}


// for services section ##################################################################


    if(window.scrollY >= servicesSection.offsetTop) {

        firstContainer.style.backgroundColor = "#f64a19";     

    }

    if(window.scrollY >= servicesSection.offsetTop + 700) {
        otherBoxes.forEach((otherBox)=>{

            firstContainer.style.backgroundColor = "var(--main-color)"; 

            // moving for service other boxes div and change opacity
            otherBox.style.left = 0;
            otherBox.style.opacity = 1;
            otherBox.style.transition = otherBox.getAttribute("transition")
        })
    }else{
        otherBoxes.forEach((otherBox)=>{
            // hide service other boxes div and change opacity
            otherBox.style.left = "-300%";
            otherBox.style.opacity = 0;
            otherBox.style.transition = otherBox.getAttribute("transition")
        })
    }






// for team section ######################################################################


    if(window.scrollY >= teamSection.offsetTop + 200) {
        firstContainer.style.backgroundColor = "orange";
        toggelLinks.style.color = "white";

        teamBoxes.forEach((teamBox)=>{
            teamBox.style.top = 0;
            teamBox.style.opacity = 1
            teamBox.style.transition = teamBox.getAttribute("transition")
        })
        
    }else {
        teamBoxes.forEach((teamBox)=>{
            teamBox.style.top = "-500%";
            teamBox.style.opacity = 0
            teamBox.style.transition = teamBox.getAttribute("transition")
        })
    }


// for news section ######################################################################



    if(window.scrollY >= newsSection.offsetTop) {
        firstContainer.style.backgroundColor = "var(--third-color)";
        toggelLinks.style.color = "white";

        newsBoxes.forEach((newBox)=>{
            newBox.style.left = 0;
            newBox.style.opacity = 1
            newBox.style.transition = newBox.getAttribute("transition")
        })
    }else {
        newsBoxes.forEach((newBox)=>{
            newBox.style.left = "-300%";
            newBox.style.opacity = 0
            newBox.style.transition = newBox.getAttribute("transition")
        })
    }




// for project section ##############################################################

    if(window.scrollY >= projectSection.offsetTop) {
        projectBoxes.forEach((projectBox)=>{
            projectBox.style.left = 0;
            projectBox.style.opacity = 1;
            projectBox.style.transition = projectBox.getAttribute("transition")
        })
    }else {
        projectBoxes.forEach((projectBox)=>{
            projectBox.style.left = 0;
            projectBox.style.opacity = 1;
            projectBox.style.transition = projectBox.getAttribute("transition")
        })
    }

// for contact top boxes ##############################################################


    if(window.scrollY >= contactSection.offsetTop) {
        //change background of the navbar when arrive on contact section

        firstContainer.style.backgroundColor = "rgb(4 67 112)";

        contactBoxes.forEach((contactBox)=>{
            contactBox.style.left = 0;
            contactBox.style.opacity = 1;
            contactBox.style.transition = contactBox.getAttribute("transition")
        })
    }else {
        contactBoxes.forEach((contactBox)=>{
            contactBox.style.left = "-300%";
            contactBox.style.opacity = 0;
            contactBox.style.transition = contactBox.getAttribute("transition")
        })
    }


//for contact section ##################################################################


    if(window.scrollY >= contactSection.offsetTop + 900) {
        //for form-div
        contactForm.style.opacity = 1;
        contactForm.style.right = 0;

        //for icons-div
        contactIconsDiv.style.marginLeft = "10px";
        contactIconsDiv.style.opacity = 1;

    }else {
        //for form-div
        contactForm.style.opacity = 0;
        contactForm.style.right = "-100%";

        //for icons-div
        contactIconsDiv.style.marginLeft = "-100%";
        contactIconsDiv.style.opacity = 0;
    }


// for footer #############################################################################


    if(window.scrollY >= footerSection.offsetTop - 400) {
    //change background of the navbar when arrive on footer section
        firstContainer.style.backgroundColor = "orange";
        toggelLinks.style.color = "white";

        footerTop.style.left = 0;
        footerTop.style.opacity = 1
    }else {
        footerTop.style.left = "-200%";
        footerTop.style.opacity = 0
    }


    if(window.scrollY >= footerSection.offsetTop - 100) {
        footerBoxes.forEach((footerBox)=>{
            footerBox.style.transitionDelay = footerBox.getAttribute("transition-delay")
            footerBox.style.opacity = 1
        })
    }else {
        footerBoxes.forEach((footerBox)=>{
            footerBox.style.transitionDelay = footerBox.getAttribute("transition-delay")
            footerBox.style.opacity = 0
        })
    }






}











