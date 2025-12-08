import CreateWid from "./WidOther.js";
import { XpWindows } from "./icons.js";

const IntExplorer = document.getElementById("IconAbXp")
const explHome = document.querySelector(".intab")
const mypc = document.querySelector(".MPtab")

IntExplorer.addEventListener("click", () => {
  if (XpWindows) {
    CreateWid(IntExplorer, "Explorer", "/wxp/IEX.ico", "/src/Cont/Explorer/index.html", null, 900, 500, { windowOn: "NXPWindow", windowOff: "NXPWindowOff", windowInac: "NXPWindowINC", tBarOn: "NXPBarOn", tBarOff: "NXPBarOff", webOn: "webXPOs", ButtonM: "ButtonX", ButtonX: "ButtonC", ButImgX: "IconXP", ButImgM: "IconMP", appTab: "TbWinXp", windowMax: "NXPWindowMAX" })
  }
  else {
    CreateWid(IntExplorer, "Explorer", "MIE.png", "/src/Cont/Explorer/index.html", null)
  }
})

explHome.addEventListener("click", () => {
  if (XpWindows) {
    CreateWid(explHome, "Explorer", "/wxp/IEX.ico", "/src/Cont/Explorer/index.html", null, 900, 500, { windowOn: "NXPWindow", windowOff: "NXPWindowOff", windowInac: "NXPWindowINC", tBarOn: "NXPBarOn", tBarOff: "NXPBarOff", webOn: "webXPOs", ButtonM: "ButtonX", ButtonX: "ButtonC", ButImgX: "IconXP", ButImgM: "IconMP", appTab: "TbWinXp", windowMax: "NXPWindowMAX" })
  }
  else {
    CreateWid(explHome, "Explorer", "MIE.png", "/src/Cont/Explorer/index.html")
  }
  document.getElementById("PanelTBMXp").className = "MenuCl"
  document.getElementById("MenuTriggerOn").id = "MenuTriggerOff"
})


mypc.addEventListener("click", () => {
  if (XpWindows) {
    CreateWid(mypc, "About Onu", "/wxp/IEX.ico", "/src/Cont/AboutPc/index.html", null, 330, 500, { windowOn: "NXPWindow", windowOff: "NXPWindowOff", windowInac: "NXPWindowINC", tBarOn: "NXPBarOn", tBarOff: "NXPBarOff", webOn: "webXPOs", ButtonM: "ButtonX", ButtonX: "ButtonC", ButImgX: "IconXP", ButImgM: "IconMP", appTab: "TbWinXp", windowMax: "NXPWindowMAX" })
  }
  else {
    CreateWid(mypc, "About Onu", "My pc.png", "/src/Cont/AboutPc/index.html", null, 330, 500)
  }
  document.getElementById("PanelTBMXp").className = "MenuCl"
  document.getElementById("MenuTriggerOn").id = "MenuTriggerOff"
})

