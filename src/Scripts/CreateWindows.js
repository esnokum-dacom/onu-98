import CreateWid from "./WidOther.js";

const IntExplorer = document.getElementById("IconAb")
const explHome = document.querySelector(".intab")
const mypc = document.querySelector(".MPtab")

IntExplorer.addEventListener("click", () => CreateWid(IntExplorer, "Explorer", "MIE.png", "/src/Cont/Explorer/index.html",))
explHome.addEventListener("click", () => CreateWid(explHome, "Explorer", "MIE.png", "/src/Cont/Explorer/index.html"))
mypc.addEventListener("click", () => CreateWid(mypc, "About Onu", "My pc.png", "/src/Cont/AboutPc/index.html", null, "330", "500"))
