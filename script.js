function getTimeAndDay() {
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');

    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    timeElement.textContent = `${hours}:${minutes}`

    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const weekDays = days[new Date().getDay()];
    dayElement.textContent = `${weekDays}`;
  }

  setInterval(getTimeAndDay, 1000);
  getTimeAndDay();

  function getInputResults() {
    const button = document.getElementById("button");
    const getInputValues = document.getElementById("getInputValues");
  
    button.addEventListener("click", function () {
      const para = document.createElement("div");
      para.classList.add("input-para");
  
      const hours = new Date().getHours().toString();
      const minutes = new Date().getMinutes().toString();
      const input = document.getElementById("input").value;
  
      para.innerHTML = `
        <div class="divi">
          <div class="text-wrap">
            <span>${input}</span>
            <h6>Today At ${hours}:${minutes}</h6>
          </div>
          <div><button class="rubbish-button"><img src="imgs/rubbish.svg" alt=""></button></div>
        </div>
      `;
  
      getInputValues.appendChild(para);
      document.getElementById("input").value = "";

      const rubbishButton = para.querySelector(".rubbish-button")
      rubbishButton.addEventListener("click" , function ()  {

        para.remove();
  
      })
    });
  }
  
  getInputResults();


  