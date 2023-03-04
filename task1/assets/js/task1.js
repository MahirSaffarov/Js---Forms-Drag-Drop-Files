"use strict"

// let form = document.querySelector("form")

// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     console.log(document.getElementById("exampleInputEmail1").value);
// })

let dragElems = document.querySelectorAll(".item");
let dropElem = document.querySelector(".drop-elem")

dragElems.forEach(element => {
    element.ondragstart = (e) =>{
        e.dataTransfer.setData("id", e.target.getAttribute("id"))
    }
});

dropElem.ondragover = (e) => {
    e.preventDefault();
}

dropElem.ondrop = (e) => {
    let id = e.dataTransfer.getData("id")
    let elem = document.getElementById(id);
    
    dropElem.append(elem)
}

// let input = document.querySelector("input")

// input.addEventListener("change", function(e){
//     for (const file of e.target.files) {
//         let reader = new FileReader();

//         reader.onloadend = (event) =>{
//             document.querySelector("img").setAttribute("src", event.currentTarget.result)
//         }

//         reader.readAsDataURL(file);
//     }
// })

// let input = document.querySelector("input")
// let icon = document.querySelector("i")

// icon.addEventListener("click",function(){
//     this.nextElementSibling.click();
// })

// input.addEventListener("change", function(e){
//     for (const file of e.target.files) {
//         let reader = new FileReader();

//         reader.onloadend = (event) =>{
//             document.querySelector("img").setAttribute("src", event.currentTarget.result)
//         }

//         reader.readAsDataURL(file);
//     }
// })