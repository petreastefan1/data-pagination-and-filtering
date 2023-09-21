
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



      for(let i =1;i<=Math.floor(data.length/9);i++){

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
   attachPage(pageNumber);


})




searchBtn.addEventListener("click", ()=>{

   let students = findCardByName(nameInpt.value);
   attachCards(students);

})



pageContainer.addEventListener("click",(e)=>{

   let obj = e.target;
   let studentEmail = obj.textContent
   let student = findModalCardByEmail(studentEmail)
   classes = obj.classList

   if(checkModalCardByEmail(studentEmail)){
      attachModalCard(student)
      modalContainer.className += " transparent-background"
   }

   if(classes.contains("close-btn") || obj.parentNode.classList.contains("close-btn")){
      attachModalCard("")
      modalContainer.className -= " transparent-background"
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