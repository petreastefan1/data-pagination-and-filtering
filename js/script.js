
const studentList = document.querySelector(".student-list");
const pageBtnsContainer = document.querySelector(".pagination");
const pageHeader = document.querySelector(".header")
const nameInpt = document.getElementById("search")
const searchBtn = document.querySelector(".search-btn")
const pageContainer = document.querySelector(".page")
const modalContainer = document.querySelector(".modal-container")
let lastChangedEmail;
let activePage


function createCard(data){

   let studentCard = document.createElement("li");
   studentCard.className ="student-item";
   studentCard.className += " cf"



   let studentDetails = document.createElement("div");
   studentDetails.className="student-details";
   studentCard.appendChild(studentDetails);

   let studentImg = document.createElement("img");
   studentImg.className="avatar";
   studentImg.setAttribute("src",`${data.picture.large}`);
   studentImg.setAttribute("alt","Profile Picture");
   studentDetails.appendChild(studentImg);

   let studentName = document.createElement("h3");
   studentName.textContent = `${data.name.first} ${data.name.last}`;
   studentDetails.appendChild(studentName);

   let studentEmail = document.createElement("span");
   studentEmail.className = "email";
   studentEmail.textContent = `${data.email}`;
   studentEmail.style.cursor="pointer";
   studentDetails.appendChild(studentEmail);

   let joinedDetails = document.createElement("div");
   joinedDetails.className="joined-details";


   let joinedDate = document.createElement("span");
   joinedDate.className="date";
   joinedDate.textContent = `Joined ${data.registered.date}`
   joinedDetails.appendChild(joinedDate);
   studentCard.appendChild(joinedDetails)
   
   return studentCard;
}

function createCards(arr){
   studentList.innerHTML="";
   for(let i = 0;i<arr.length;i++){
     studentList.appendChild(createCard(arr[i]));

   }
}


function createButton(number){

   let buttonList = document.createElement("li");
   let pageButton = document.createElement("button");
   pageButton.type="button";
   pageButton.textContent = `${number}`;

   buttonList.appendChild(pageButton)

   return buttonList;
}


function createButtons(){

      let linkList = document.createElement("ul");
      linkList.className="link-list";
      pageBtnsContainer.appendChild(linkList);



      for(let i =1;i<=Math.ceil(data.length/9);i++){

         let button = createButton(i);
         button.className = `button-${i}`;
         linkList.append(button);

      }

}

function findCardByName(name){

   card = [];

   for(let i = 0;i<data.length;i++){
      if(data[i].name.first.toLowerCase() == name.toLowerCase() || data[i].name.last.toLowerCase() == name.toLowerCase()){
         card.push(data[i])
      }
   }
   return card
}


function attachCards(arr){
   pageContainer.innerHTML="";
   for(let i = 0;i<arr.length;i++){
      pageContainer.appendChild(createCard(arr[i]));

   }
}

//tooo: primeste ca parametru un [12,32,43,54,65,76,76,23]  si un numar 6 =>[76,33]
function pagination(data,number,page){
   let filer = [];
   for(let i = number*(page-1);i<data.length && i<= number*page-1;i++){
       filer.push(data[i]);
   }
   return filer;
}



function createModalCard(data){

   let cardSection = document.createElement("section");
   cardSection.className = "modal-card";

   let studentList = document.createElement("li");
   studentList.className = `student-item cf student-card-big`
   cardSection.appendChild(studentList)

   let studentDetails = document.createElement("div");
   studentDetails.className="student-details";
   studentList.appendChild(studentDetails);

   let studentImg = document.createElement("img");
   studentImg.className="avatar";
   studentImg.setAttribute("src",`${data.picture.large}`);
   studentImg.setAttribute("alt","Profile Picture");
   studentDetails.appendChild(studentImg);

   let studentName = document.createElement("h3");
   studentName.textContent = `${data.name.first} ${data.name.last}`;
   studentDetails.appendChild(studentName);

   let studentEmail = document.createElement("span");
   studentEmail.className = "email";
   studentEmail.textContent = `${data.email}`;
   studentDetails.appendChild(studentEmail);

   let joinedDetails = document.createElement("div");
   joinedDetails.className="joined-details";
      studentList.appendChild(joinedDetails);

   let joinedDate = document.createElement("span");
   joinedDate.className="date";
   joinedDate.textContent = `Joined ${data.registered.date}`
   joinedDetails.appendChild(joinedDate);

   let closeBtnContainer = document.createElement("button");
   closeBtnContainer.className = "close-btn";
   let closeBtn = document.createElement("i");
   closeBtn.className = "fa-solid fa-x"
   closeBtnContainer.appendChild(closeBtn)
   cardSection.appendChild(closeBtnContainer)

   let arrowRightContainer = document.createElement("button");
   arrowRightContainer.className = "arrow-right";

   let arrowRight = document.createElement("i");
   arrowRight.className = "fa-solid fa-arrow-right"
   arrowRightContainer.appendChild(arrowRight);
   cardSection.appendChild(arrowRightContainer)

   let arrowLeftContainer = document.createElement("button");
   arrowLeftContainer.className = "arrow-left";

   let arrowLeft = document.createElement("i");
   arrowLeft.className = "fa-solid fa-arrow-left"
   arrowLeftContainer.appendChild(arrowLeft);
   cardSection.appendChild(arrowLeftContainer)

   let editBtn = document.createElement("button");
   editBtn.className = "edit-btn";
   editBtn.textContent = "Edit"
   cardSection.appendChild(editBtn)


   return cardSection
}



function checkModalCardByEmail(email){

   for(let i = 0;i<data.length;i++){
      if(data[i].email == email){
         return true
      }
   }

}

function findModalCardByEmail(email){

   card = [];

   for(let i = 0;i<data.length;i++){
      if(data[i].email == email){
         card.push(data[i])
      }
   }
   return card
}

function findModalCardNextSibling(email){

   card = [];

   for(let i = 0;i<data.length;i++){
      if(data[i].email == email && i < data.length-1){
         card.push(data[i+1])
      }

      else if(data[i].email == email && i == data.length-1){
         card.push(data[i])
      }
   }
   return card

}


function findModalCardPreviousSibling(email){

   card = [];

   for(let i = 0;i<data.length;i++){

      if(data[i].email == email && i == data.length-data.length){
         card.push(data[i])
      }

      else if(data[i].email == email && i < data.length-1){
         card.push(data[i-1])
      }

   }
   return card

}


function attachModalCard(arr){
   modalContainer.innerHTML="";
   for(let i = 0;i<arr.length;i++){
      modalContainer.appendChild(createModalCard(arr[i]));

   }
}

function attachPage(page){
   let arr = pagination(data,9,page);
   createCards(arr);
}

function editModalCard(){
   let studentName = modalContainer.firstElementChild.firstElementChild.firstElementChild.firstElementChild.nextElementSibling
   let newStudentInpt = document.createElement("input");
   newStudentInpt.className = "student-name-inpt"
   newStudentInpt.value = studentName.textContent
   let studentDetails = document.querySelector(".student-details")
   
 
   let studentEmail = modalContainer.firstElementChild.firstElementChild.firstElementChild.lastElementChild;

   lastChangedEmail=studentEmail.textContent;
   let newEmailInpt = document.createElement("input");
   newEmailInpt.className = "student-email-inpt"
   newEmailInpt.value = studentEmail.textContent



   studentDetails.insertBefore(newEmailInpt,studentEmail)
   studentDetails.removeChild(studentEmail)

   studentDetails.insertBefore(newStudentInpt,studentName)
   studentDetails.removeChild(studentName)


   let editBtn = document.querySelector(".edit-btn")
   editBtn.textContent = "Save"
   editBtn.classList.add("save-btn");
   editBtn.classList.remove("edit-btn")

}

function saveModalCard(){
      let studentName = modalContainer.firstElementChild.firstElementChild.firstElementChild.firstElementChild.nextElementSibling
      let newStudentName = document.createElement("h3");
      newStudentName.textContent = studentName.value
      let studentDetails = document.querySelector(".student-details")


      let newEmailInpt = modalContainer.firstElementChild.firstElementChild.firstElementChild.lastElementChild
      let studentEmail = document.createElement("span");
      studentEmail.className = "email"
      studentEmail.textContent = newEmailInpt.value


      studentDetails.insertBefore(studentEmail,newEmailInpt)
      studentDetails.removeChild(newEmailInpt)

      studentDetails.insertBefore(newStudentName,studentName)
      studentDetails.removeChild(studentName)

      let saveBtn = document.querySelector(".save-btn")
      saveBtn.textContent = "Edit"
      saveBtn.classList.add("edit-btn");
      saveBtn.classList.remove("save-btn")

      newStudent = {
         first: `${studentName.value.split(" ")[0]}`,
         last: `${studentName.value.split(" ")[1]}`,
         email: `${newEmailInpt.value}`
      }
      updateStudent(lastChangedEmail,newStudent)

}





attachPage(1)
createButtons()

pageBtnsContainer.addEventListener("click",(e)=>{

   let obj = e.target;
   let parentClass = obj.parentNode.className
   let index=parentClass.toString();
   let pageNumber = index.slice(-1);
   activePage = pageNumber;

   if(+pageNumber){
      attachPage(pageNumber);
   }
})




searchBtn.addEventListener("click", ()=>{

   let students = findCardByName(nameInpt.value);
   if(nameInpt.value.length>0){
      attachCards(students); 
   }


})



pageContainer.addEventListener("click",(e)=>{

   let obj = e.target;
   let studentEmail = obj.textContent;
   let student = findModalCardByEmail(studentEmail);
   let parentClass = obj.parentNode.classList
   let classes = obj.classList;
   let modalCardEmail = obj.parentNode.parentNode.firstElementChild.firstElementChild.lastElementChild

   if(checkModalCardByEmail(studentEmail)){
      attachModalCard(student);
      modalContainer.classList.add("transparent-background");
   }

   if(classes.contains("close-btn") || obj.parentNode.classList.contains("close-btn")){
      attachModalCard("")
      modalContainer.classList.remove("transparent-background")
   }
   
   if(classes.contains("arrow-right") || parentClass.contains("arrow-right")){
      let nextStudent = findModalCardNextSibling(modalCardEmail.textContent);
      attachModalCard(nextStudent);
   }

   if(classes.contains("arrow-left") || parentClass.contains("arrow-left")){
      let previousStudent = findModalCardPreviousSibling(modalCardEmail.textContent);
      attachModalCard(previousStudent);
   }

   if(classes.contains("edit-btn")){
      editModalCard()
   }

   else if(classes.contains("save-btn")){
      saveModalCard()

   }

})


function  getDataIndexByEmail(email){


   for(let i = 0;i<data.length;i++){
      if(data[i].email == email){
         return i
      }
   }

   return -1;
   
}

function updateStudent(email,newStudent){


   data[getDataIndexByEmail(email)].name.first = newStudent.first;
   data[getDataIndexByEmail(email)].name.last = newStudent.last;
   data[getDataIndexByEmail(email)].email = newStudent.email;
   attachPage(activePage);
}


