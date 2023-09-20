
const studentList = document.querySelector(".student-list");
const pageBtnsContainer = document.querySelector(".pagination");
const pageHeader = document.querySelector(".header")
const nameInpt = document.getElementById("search")
const searchBtn = document.querySelector(".search-btn")


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
   studentList.innerHTML="";
   for(let i = 0;i<arr.length;i++){
     studentList.appendChild(createCard(arr[i]));

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