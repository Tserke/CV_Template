const body = document.body;
const educationForm=document.querySelector("#educationForm");
const workForm=document.querySelector("#workForm");

//function to add two inputs of type text to education form field with a button
let counterEdu=1
function addEducationInput(){
    if (counterEdu<2){
        const h4 = document.createElement('h4');
        h4.setAttribute('id','educationh4');
        h4.innerText="Education";
        educationForm.append(h4);
    }
    //date input (type="text")
    const date = document.createElement('p');
    date.setAttribute("contenteditable","true");
    date.setAttribute("name","eduDate");
    date.setAttribute("id","eduDate"+counterEdu);
    date.innerText = "date";
    educationForm.append(date);
    //education input (type="text")
    const input = document.createElement('p');
    input.setAttribute("contenteditable","true");
    input.setAttribute("name","edu"+counterEdu);
    input.setAttribute("id","edu"+counterEdu);
    input.innerText= "education";
    educationForm.append(input);
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
    }
    else{
        let removeH4 = document.querySelector("#educationh4");
        removeH4.remove();
    }
}
//function to add language
let counterLang=1
function addLanguage(){
    if (counterLang<2){
        const h4 = document.createElement('h4');
        h4.setAttribute('id','language');
        h4.innerText="Language Skills";
        educationForm.append(h4);
    }
    //date input (type="text")
    const date = document.createElement('input');
    date.setAttribute("type","text");
    date.setAttribute("name","languageName");
    date.setAttribute("id","languageName"+counterLang);
    date.innerText = "Language";
    educationForm.append(date);
    //education input (type="text")
    const input = document.createElement('input');
    input.setAttribute("type","range");
    input.setAttribute("min","1");
    input.setAttribute("max","100");
    input.setAttribute("value","50");
    input.setAttribute("name","langSlider");
    input.setAttribute("id","langSlider"+counterLang);
    educationForm.append(input);
    counterLang++
}
//remove language
function removeLanguage(){
    if(counterLang>1){
        counterLang--;
        // removes date
        let languageName ="#languageName"+counterLang;
        let langToBeRemoved= document.querySelector(languageName);
        langToBeRemoved.remove();
        // removes  education
        let name ="#langSlider"+counterLang;
        let inputToBeRemoved= document.querySelector(name);
        inputToBeRemoved.remove();
    }
    else{
        let removeH4 = document.querySelector("#language");
        removeH4.remove();
    }
}
//function add list
let counterList=1;
function addList(){
    if (counterList<2){
        const h4 = document.createElement('h4');
        h4.setAttribute("id","additionalInfo");
        h4.innerText = "Additional Information";
        educationForm.append(h4);
        const ul = document.createElement('ul');
        ul.setAttribute("id","ul")
        educationForm.append(ul);
    }
    const li = document.createElement('li');
    li.setAttribute("contenteditable","true");
    li.setAttribute("id","li"+counterList);
    ul.append(li);
    counterList++;
}
//function remove list
function removeList(){
    if(counterList>1){
        counterList--;
        let name ="#li"+counterList;
        let liToBeRemoved= document.querySelector(name);
        liToBeRemoved.remove();
    }
    else{
        let removeH4 = document.querySelector("#additionalInfo");
        removeH4.remove();
        let ulRemove = document.querySelector("#ul");
        ulRemove.remove();
    }
}
//work
let counterWork=1
function addWorkInput(){
    // add work date
    const date = document.createElement('p');
    date.setAttribute("contenteditable","true");
    date.setAttribute("name","workDate");
    date.setAttribute("id","workDate"+counterWork);
    date.setAttribute("placeholder","date");
    date.innerText= "date";
    workForm.append(date);
    // add work description
    const input = document.createElement('p');
    input.setAttribute("contenteditable","true");
    input.setAttribute("name","work"+counterWork);
    input.setAttribute("id","work"+counterWork);
    input.setAttribute("placeholder","work");
    input.innerText= "work";
    workForm.append(input);
    counterWork++
}
function removeWorkInput(){
    if(counterWork>1){
        counterWork--;
        //removes work date
        let workDate="#workDate"+counterWork;
        let workDateToBeRemoved=document.querySelector(workDate)
        workDateToBeRemoved.remove();
        //removes work description
        let name ="#work"+counterWork;
        let toBeRemoved= document.querySelector(name);
        toBeRemoved.remove();
    }
}
//drag and drop to set the photo
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
    });

    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
    
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });

    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();

      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
    });
  });

  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }

    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
}
