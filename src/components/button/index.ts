class Button extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
    const style = document.createElement("style");
    style.innerHTML = `
      .button-container{
          display: flex;
          justify-content: center;
          align-items: center;
      }
      button{
          font-family: "sunset-club";
          font-size: 45px;
          width: 311px;
          height: 87px;
          background: transparent;
          color: #fff;
          animation: flicker 8s infinite alternate;
          border: 0.2rem solid #fff;
          border-radius: 2rem;
          box-shadow: 0 0 .2rem #fff,
          0 0 .1rem #fff,
          0 0 .05rem #fff,
          0 0 0.8rem #C724B1,
          0 0 2.8rem #C724B1,
          inset 0 0 1.3rem #C724B1;
      }
      @keyframes flicker {
    
        0%, 18%, 22%, 25%, 53%, 57%, 100% {
      
            text-shadow:
            0 0 4px #fff,
            0 0 11px #fff,
            0 0 19px #fff,
            0 0 40px #C724B1,
            0 0 80px #C724B1,
            0 0 90px #C724B1,
            0 0 100px #C724B1,
            0 0 150px #C724B1;
        
        }
        
        20%, 24%, 55% {        
            text-shadow: none;
        }    
      }
    `;
    this.shadow.appendChild(style);
  }
  render() {
    const buttonContainer = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("class", "home");
    buttonContainer.setAttribute("class", "button-container");
    buttonContainer.appendChild(button);
    this.shadow.appendChild(buttonContainer);

    if (location.pathname == "/desafio-m5/home") {
      return (button.textContent = "Empezar");
    } else if (location.pathname == "/instructions") {
      return (button.textContent = "Jugar!");
    } else button.textContent = "Volver a jugar";
  }
}

customElements.define("custom-button", Button);
