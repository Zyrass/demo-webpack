import "./style.scss";
import lionJPG from "./assets/images/lion.jpg";

const myFonction = () => console.log("bonjour cher IT-AKADEMIEN");
myFonction();

const h1 = document.createElement("h1");
document.body.appendChild(h1);

h1.textContent = "Hello welcome to IT-AKADEMY";

const img = new Image();
img.src = lionJPG;
img.alt = "Image d'un lion";

document.body.appendChild(img);
