import { goTo } from "../../router";
export function initInstructionsPage(containerEl: Element) {
  const div = document.createElement("div");
  div.setAttribute("class", "container");
  const style = document.createElement("style");
  style.setAttribute("class", "style");
  style.innerHTML = `
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
    } 
    .main-title {
     font-family: 'sunset-club';
     color: #fff;
     padding-left: 10px;

     font-size: 3.5rem;
     animation: flicker 8s infinite alternate;
     text-align: center;
  }
  
  @keyframes flicker {
      
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
  
        text-shadow:
        0 0 2px  #CC00FF,
        0 0 5px  #CC00FF,
        0 0 5px  #CC00FF,
        0 0 5px  #FF0000,
        0 0 80px #FF0000,
        0 0 20px #FF0000,
        0 0 20px #FF0000,
        0 0 40px #FF0000;
    }
    
    24%, 55% {        
        text-shadow: none;
    }    
  }
    `;

  div.innerHTML = `
    <h1 class="main-title">Presioná jugar y elegí <br> PIEDRA,<br> PAPEL o<br> TIJERA<br> antes de que pasen los 3 segundos.</h1>
    `;

  containerEl.appendChild(div);
  const bttn = document.createElement("custom-button");
  div.appendChild(bttn);
  bttn.addEventListener("click", () => {
    goTo(containerEl, "/game");
  });
  containerEl.appendChild(style);
}
