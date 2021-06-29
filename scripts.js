const body = document.body;


//div of Education field
const newEdu = document.createElement('div');
newEdu.setAttribute("name", "edu");
newEdu.setAttribute("id","edu",);
body.append(newEdu);
//form of Education field
const eduForm = document.createElement('form');
eduForm.setAttribute("name","eduForm");
eduForm.setAttribute("id","eduForm");
newEdu.append(eduForm);
//button to add text to the education form field
const addEdu = document.createElement('button');
addEdu.setAttribute("name","addEdu");
addEdu.setAttribute("id","addEdu");
addEdu.setAttribute("onclick","addEduInput();");
addEdu.innerText= "add"
newEdu.append(addEdu);
//button to remove input of type text
const removeEdu = document.createElement("button");
removeEdu.setAttribute("name","removeEdu");
removeEdu.setAttribute("id","removeEdu");
removeEdu.setAttribute("onclick","removeEduInput();");
removeEdu.innerText= "remove";
newEdu.append(removeEdu);
//function to add input of type text to education form field with a button input
let counterEdu=1
function addEduInput(){
    const newInput = document.createElement('input');
    newInput.setAttribute("type","text");
    newInput.setAttribute("name","edu"+counterEdu);
    newInput.setAttribute("id","edu"+counterEdu);
    newInput.setAttribute("size","50");
    eduForm.append(newInput);
    const br =document.createElement('br');
    br.setAttribute("id","id"+counterEdu)
    newInput.insertAdjacentElement('afterend',br)
    counterEdu++
}
//function to remove input of type text from education form with a button input
function removeEduInput(){
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

//div of work field
const newWork = document.createElement('div');
newWork.setAttribute("name", "work");
newWork.setAttribute("id","work",);
body.append(newWork);
//form of work field
const workForm = document.createElement('form');
workForm.setAttribute("name","workForm");
workForm.setAttribute("id","workForm");
newWork.append(workForm);
//button to add input of type text to the Work form
const addWork = document.createElement('button');
addWork.setAttribute("name","addWork");
addWork.setAttribute("id","addWork");
addWork.setAttribute("onclick","addWorkInput();");
addWork.innerText= "add"
newWork.append(addWork);
//button to remove input of type text to the Work form
const removeWork = document.createElement("button");
removeWork.setAttribute("name","removeWork");
removeWork.setAttribute("id","removeWork");
removeWork.setAttribute("onclick","removeWorkInput();");
removeWork.innerText= "remove";
newWork.append(removeWork);
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