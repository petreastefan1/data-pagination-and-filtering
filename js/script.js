
const studentList = document.querySelector(".student-list");
const pageBtnsContainer = document.querySelector(".pagination");
const pageHeader = document.querySelector(".header")
const nameInpt = document.getElementById("search")
const searchBtn = document.querySelector(".search-btn")
const pageContainer = document.querySelector(".page")
const modalContainer = document.querySelector(".modal-container")

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




function createModalCard(data){

   let cardSection = document.createElement("section");
   cardSection.className = "modal-card";

   let studentList = document.createElement("li");
   studentList.className = "student-item cf student-card-big"
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




   return cardSection
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



attachPage(1)
createButtons()

pageBtnsContainer.addEventListener("click",(e)=>{

   let obj = e.target;
   let parentClass = obj.parentNode.className
   let index=parentClass.toString();
   let pageNumber = index.slice(-1);

   if(+pageNumber){
      attachPage(pageNumber);
   }

})




searchBtn.addEventListener("click", ()=>{

   let students = findCardByName(nameInpt.value);
   attachCards(students);

})



pageContainer.addEventListener("click",(e)=>{

   let obj = e.target;
   let studentEmail = obj.textContent;
   let student = findModalCardByEmail(studentEmail);
   let parentClass = obj.parentNode.classList
   let classes = obj.classList;
   if(checkModalCardByEmail(studentEmail)){
      attachModalCard(student);
      modalContainer.classList.add("transparent-background");
   }

   if(classes.contains("close-btn") || obj.parentNode.classList.contains("close-btn")){
      attachModalCard("")
      modalContainer.classList.remove("transparent-background")
   }
   
   if(classes.contains("arrow-right") || parentClass.contains("arrow-right")){
      let modalCardEmail = obj.parentNode.parentNode.firstElementChild.firstElementChild.lastElementChild.textContent;
      let nextStudent = findModalCardNextSibling(modalCardEmail);
      attachModalCard(nextStudent);
   }

   if(classes.contains("arrow-left") || parentClass.contains("arrow-left")){
      let modalCardEmail = obj.parentNode.parentNode.firstElementChild.firstElementChild.lastElementChild.textContent;
      let previousStudent = findModalCardPreviousSibling(modalCardEmail);
      attachModalCard(previousStudent);

   }





})







// pageHeader.addEventListener("click",(e)=>{
//    let obj = e.target
//    let classes = obj.classList


//    if(classes.contains("search-btn") || obj.parentNode.classList.contains("search-btn")){
//       console.log(nameInpt.value)
//    }

// })


// function createSearchBar(){
//    let label = document.createElement("label");
//    label.setAttribute("for","search");
//    label.className = "student-search"

//    let searchInpt = document.createElement("input");
//    searchInpt.id = "search";
//    searchInpt.placeholder = "Search by name...";
//    label.appendChild(searchInpt);

//    let searchImg = document.createElement("img");
//    searchImg.src = "img/icn-search.svg";
//    searchImg.alt= "Search icon"

//    let searchBtn = document.createElement("button");
//    searchBtn.type = "button";
//    searchBtn.className = "search-btn";
//    searchBtn.appendChild(searchImg) ;
//    label.appendChild(searchBtn)

//    pageHeader.appendChild(label)



// }