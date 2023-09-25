export default function getInputResults() {
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
            <h6 class ="para-time">Today At ${hours}:${minutes}</h6>
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
  