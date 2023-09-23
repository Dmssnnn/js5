// function getTimeAndDay() {
//     const timeElement = document.getElementById('time');
//     const dayElement = document.getElementById('day');

//     const hours = new Date().getHours().toString().padStart(2, '0');
//     const minutes = new Date().getMinutes().toString().padStart(2, '0')
//     timeElement.textContent = `${hours}:${minutes}`;

//     const days = ["Sun", "Mon", "Tue", "Wedn", "Thur", "Fri", "Satur"];
//     const weekDays = days[new Date().getDay()];
//     dayElement.textContent = ` ${weekDays}`;
// }


// // setInterval(getTimeAndDay, 1000)
// getTimeAndDay();


// function getInputResults  ()  {    //badname//
//     const button = document.getElementById("button")
//     button.addEventListener("click", function() {
        
//         const getInputValues = document.getElementById("getInputValues")
//         const para = document.createElement("p")
//         para.classList.add("input-para")
        
//         getInputValues.appendChild(para)


//         const hours = new Date().getHours().toString().padStart(2, '0');
//         const minutes = new Date().getMinutes().toString().padStart(2, '0')
//         const input = document.getElementById("input").value
    
//         para.innerHTML = `
//             <div class ="divi"> 
//                 <div class = "text-wrap" >
//                 <span>${input}</span>
//                 <h6>Today At ${hours}:${minutes}</h6>
//                 </div>
//                 <div><button onclick ="deleteRaw()" class = "rubbish-button"><img src="imgs/rubbish.svg" alt=""></button></div>
//             </div>
//         `
       
//     })
// }
// getInputResults  ();



// function deleteRaw() {
//     const para = document.querySelector(".input-para")
//     const redButton = document.querySelector(".rubbish-button")
//     redButton.addEventListener("click" , () => {

//         para.remove();

//     })
  
//   }







  function getTimeAndDay() {
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');

    const hours = new Date().getHours().toString().padStart(2, '0');
    const minutes = new Date().getMinutes().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;

    const days = ["Sun", "Mon", "Tue", "Wedn", "Thur", "Fri", "Satur"];
    const weekDays = days[new Date().getDay()];
    dayElement.textContent = `${weekDays}`;
  }

  setInterval(getTimeAndDay, 1000);
  getTimeAndDay();

  function getInputResults() {
    const button = document.getElementById("button");
    const getInputValues = document.getElementById("getInputValues");

    button.addEventListener("click", function (e) {
      e.preventDefault();

      const para = document.createElement("div");
      para.classList.add("input-para");

      const hours = new Date().getHours().toString().padStart(2, '0');
      const minutes = new Date().getMinutes().toString().padStart(2, '0');
      const input = document.getElementById("input").value;

      para.innerHTML = `
        <div class="divi">
          <div class="text-wrap">
            <span>${input}</span>
            <h6>Today At ${hours}:${minutes}</h6>
          </div>
          <div><button onclick="deleteRaw(this)" class="rubbish-button"><img src="imgs/rubbish.svg" alt=""></button></div>
        </div>
      `;
    
      getInputValues.appendChild(para);
      document.getElementById("input").value = ''; 
    });
  }

  getInputResults();

  function deleteRaw(isa) {
    const para = isa.parentElement.parentElement;
    para.remove();
  }


