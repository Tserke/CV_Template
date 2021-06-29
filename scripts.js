const body = document.body;
const educationForm=document.querySelector("#educationForm");
const workForm=document.querySelector("#workForm");

//function to add input of type text to education form field with a button input
let counterEdu=1
function addEducationInput(){
    const newInput = document.createElement('input');
    newInput.setAttribute("type","text");
    newInput.setAttribute("name","edu"+counterEdu);
    newInput.setAttribute("id","edu"+counterEdu);
    newInput.setAttribute("size","50");
    educationForm.append(newInput);
    const br =document.createElement('br');
    br.setAttribute("id","id"+counterEdu)
    newInput.insertAdjacentElement('afterend',br)
    counterEdu++
}
//function to remove input of type text from education form with a button input
function removeEducationInput(){
    if(counterEdu>1){
        counterEdu--;
        let name ="#edu"+counterEdu;
        let toBeRemoved= document.querySelector(name);
        let idName="#id"+counterEdu;
        let brToBeRemoved = document.querySelector(idName);
        console.log(toBeRemoved);
        toBeRemoved.remove();
        brToBeRemoved.remove();
    }
}
//function to add input of type text to education form field with a button input
let counterWork=1
function addWorkInput(){
    const newInput = document.createElement('input');
    newInput.setAttribute("type","text");
    newInput.setAttribute("name","work"+counterWork);
    newInput.setAttribute("id","work"+counterWork);
    newInput.setAttribute("size","50");
    workForm.append(newInput);
    const br =document.createElement('br');
    br.setAttribute("id","idW"+counterWork)
    newInput.insertAdjacentElement('afterend',br)
    counterWork++
}
//function to remove input of type text from education form with a button input
function removeWorkInput(){
    if(counterWork>1){
        counterWork--;
        let name ="#work"+counterWork;
        let toBeRemoved= document.querySelector(name);
        let idName="#idW"+counterWork;
        let brToBeRemoved = document.querySelector(idName);
        console.log(toBeRemoved);
        toBeRemoved.remove();
        brToBeRemoved.remove();
    }
}