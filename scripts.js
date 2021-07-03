const body = document.body;
const educationForm=document.querySelector("#educationForm");
const workForm=document.querySelector("#workForm");

//function to add two inputs of type text to education form field with a button
let counterEdu=1
function addEducationInput(){
    //date input (type="text")
    const date = document.createElement('input');
    date.setAttribute("type","text");
    date.setAttribute("name","eduDate");
    date.setAttribute("id","eduDate"+counterEdu);
    date.setAttribute("placeholder","date");
    educationForm.append(date);
    //education input (type="text")
    const input = document.createElement('input');
    input.setAttribute("type","text");
    input.setAttribute("name","edu"+counterEdu);
    input.setAttribute("id","edu"+counterEdu);
    input.setAttribute("placeholder","education");
    educationForm.append(input);
    //br after education date
    const brDate =document.createElement('br');
    brDate.setAttribute("id","brEduDate"+counterEdu);
    date.insertAdjacentElement('afterEnd',brDate);
    //br after education input
    const brInput =document.createElement('br');
    brInput.setAttribute("id","brInput"+counterEdu); 
    input.insertAdjacentElement('afterEnd',brInput);
    counterEdu++
}
//function to remove input of type text from education form with a button input
function removeEducationInput(){
    if(counterEdu>1){
        counterEdu--;
        // removes date
        let eduDate ="#eduDate"+counterEdu;
        let dateToBeRemoved= document.querySelector(eduDate);
        dateToBeRemoved.remove();
        // removes  education
        let name ="#edu"+counterEdu;
        let inputToBeRemoved= document.querySelector(name);
        inputToBeRemoved.remove();
        //removes br for date
        let brDateId="#brEduDate"+counterEdu;
        let brDateToBeRemoved = document.querySelector(brDateId);
        brDateToBeRemoved.remove();
        //removes br for input
        let brInputId="#brInput"+counterEdu;
        let brInputToBeRemoved = document.querySelector(brInputId);
        brInputToBeRemoved.remove();
    }
}
//function to add input of type text to education form field with a button input
let counterWork=1
function addWorkInput(){
    //date input (type="text")
    const date = document.createElement('input');
    date.setAttribute("type","text");
    date.setAttribute("name","workDate");
    date.setAttribute("id","workDate"+counterWork);
    date.setAttribute("placeholder","date");
    workForm.append(date);
    //work input (type="text")
    const input = document.createElement('input');
    input.setAttribute("type","text");
    input.setAttribute("name","work"+counterWork);
    input.setAttribute("id","work"+counterWork);
    input.setAttribute("placeholder","work");
    workForm.append(input);
    //br after work date
    const brDate=document.createElement('br');
    brDate.setAttribute("id","brWorkDate"+counterWork);
    date.insertAdjacentElement('afterend',brDate);
    //br after work input
    const br =document.createElement('br');
    br.setAttribute("id","brWork"+counterWork)
    input.insertAdjacentElement('afterend',br)
    counterWork++
}
//function to remove input of type text from education form with a button input
function removeWorkInput(){
    if(counterWork>1){
        counterWork--;
        //removes work date
        let workDate="#workDate"+counterWork;
        let workDateToBeRemoved=document.querySelector(workDate)
        workDateToBeRemoved.remove();
        //removes work input
        let name ="#work"+counterWork;
        let toBeRemoved= document.querySelector(name);
        toBeRemoved.remove();
        //removes date br
        let dateBr = "#brWorkDate"+counterWork;
        let dateBrToBeRemoved = document.querySelector(dateBr);
        dateBrToBeRemoved.remove();
        //removes work br
        let idName="#brWork"+counterWork;
        let brToBeRemoved = document.querySelector(idName);
        brToBeRemoved.remove();
    }
}