/*let ScreenHeight; 

function manipulateFooter(){
    var footer = document.getElementById("footer1");
    footer.remove();
}

function getScreenHeight(){
    let aboutMeDiv = document.getElementById("aboutme");
    ScreenHeight = aboutMeDiv.scrollHeight;
    resetDiv(ScreenHeight);
     
}
function resetDiv(ScreenHeight){
  
    if(ScreenHeight == 580){

        var resetFooter = document.createElement("footer");
        resetFooter.setAttribute ('id', 'footer1');
        resetFooter.innerText = "teste";
        const target = document.querySelector("#footer-goes-bellow");
       target.parentNode.insertBefore(resetFooter,target );

    }
    
}*/
