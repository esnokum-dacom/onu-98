import initRendersButton from "../../ScriptsAll/Window.js";

if (window.parent.XpWindows) {
  initRendersButton("CreateCW", "Renders", "/../../../Props/Icons/MIE.png", "/src/Cont/Renders/index.html", 600, 500)
}
else {
  initRendersButton("CreateCW", "Renders", "/../../../Props/Icons/MIE.png", "/src/Cont/Renders/index.html", 600, 500, { windowOn: "NXPWindow", windowOff: "NXPWindowOff", windowInac: "NXPWindowINC", tBarOn: "NXPBarOn", tBarOff: "NXPBarOff", webOn: "webXPOs", ButtonM: "ButtonX", ButtonX: "ButtonC", ButImgX: "IconXP", ButImgM: "IconMP", appTab: "TbWinXp", windowMax: "NXPWindowMAX" })
}

if (window.parent.XpWindows) {
  initRendersButton("CreateBl", "Log media ", "/../../../Props/Icons/MIE.png", "/src/Cont/Blog/index.html", 600, 500);
}
else {
  initRendersButton("CreateBl", "Log media ", "/../../../Props/Icons/MIE.png", "/src/Cont/Blog/index.html", 600, 500, { windowOn: "NXPWindow", windowOff: "NXPWindowOff", windowInac: "NXPWindowINC", tBarOn: "NXPBarOn", tBarOff: "NXPBarOff", webOn: "webXPOs", ButtonM: "ButtonX", ButtonX: "ButtonC", ButImgX: "IconXP", ButImgM: "IconMP", appTab: "TbWinXp", windowMax: "NXPWindowMAX" });
}

if (window.parent.XpWindows) {
  initRendersButton("CreateTS", "Tastes", "/../../../Props/Icons/MIE.png", "/src/Cont/MyTastes/index.html", 700, 350);
}
else {
  initRendersButton("CreateTS", "Tastes", "/../../../Props/Icons/MIE.png", "/src/Cont/MyTastes/index.html", 700, 350, { windowOn: "NXPWindow", windowOff: "NXPWindowOff", windowInac: "NXPWindowINC", tBarOn: "NXPBarOn", tBarOff: "NXPBarOff", webOn: "webXPOs", ButtonM: "ButtonX", ButtonX: "ButtonC", ButImgX: "IconXP", ButImgM: "IconMP", appTab: "TbWinXp", windowMax: "NXPWindowMAX" });
}
