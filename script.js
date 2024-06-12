let textArea = document.getElementById("textarea");
 function setToLocalStorage(){
    localStorage.setItem("textValue", textArea.value);
 }
 textArea.addEventListener("input",setToLocalStorage);


 if(localStorage.getItem("textValue")){
    textArea.value=localStorage.getItem("textValue");
 }



 const toggleTheam = document.getElementById("switch");
const body = document.body;
const cuurTheam = body.getAttribute('data-theam');
body.setAttribute('data-theam', "light");
localStorage.setItem('theam', "light");

toggleTheam.addEventListener("click", () => {
    const currTheam =localStorage.getItem('theam');
     const newTheam = currTheam === "dark" ? "light" : "dark";
     localStorage.setItem('theam', newTheam);
     body.setAttribute('data-theam', newTheam);
})