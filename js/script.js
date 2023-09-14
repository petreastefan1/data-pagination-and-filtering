
const studentList = document.querySelector(".student-list");



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

function createCards(){

   

   for(let i = 0;i<9;i++){
     studentList.appendChild(createCard(data[i]));

   }

   
}




createCards()