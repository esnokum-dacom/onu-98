import CreateWid from "./WidOther.js";

function makeDraggable(element, storageKey) {
  let X = 0, Y = 0, SX = 0, SY = 0;
  const posGuardada = JSON.parse(localStorage.getItem(storageKey));
  if (posGuardada) {
    element.style.left = posGuardada.left;
    element.style.top = posGuardada.top;
  }
  element.addEventListener("pointerdown", (e) => {
    SX = e.clientX;
    SY = e.clientY;
    const moveHandler = (e) => {
      X = SX - e.clientX;
      Y = SY - e.clientY;
      SX = e.clientX;
      SY = e.clientY;
      element.style.top = (element.offsetTop - Y) + "px";
      element.style.left = (element.offsetLeft - X) + "px";
    };
    const upHandler = () => {
      document.removeEventListener("pointermove", moveHandler);
      document.removeEventListener("pointerup", upHandler);
      localStorage.setItem(storageKey, JSON.stringify({
        left: element.style.left,
        top: element.style.top
      }));
    };
    document.addEventListener("pointermove", moveHandler);
    document.addEventListener("pointerup", upHandler);
  });
}

const icon = document.getElementById("IconBack");
const iconXp = document.getElementById("IconBackXp");

let XpWindows = true

const mq = window.matchMedia("(max-width: 590px)");

function ifScreenMQ(e) {
  if (e.matches) {
    if (icon) {
      icon.addEventListener("pointerdown", () => {
        if (XpWindows) {
          CreateWid(icon, "About Onu", "/wxp/IEX.ico", "/src/Cont/AboutPc/index.html", null, "330", "500", { windowOn: "NXPWindow", windowOff: "NXPWindowOff", windowInac: "NXPWindowINC", tBarOn: "NXPBarOn", tBarOff: "NXPBarOff", webOn: "webXPOs", ButtonM: "ButtonX", ButtonX: "ButtonC", ButImgX: "IconXP", ButImgM: "IconMP", appTab: "TbWinXp", windowMax: "NXPWindowMAX" });
        }
        else {
          CreateWid(icon, "About Onu", "My pc.png", "/src/Cont/AboutPc/index.html", null, "330", "500");
        }
      }
      )
    }
  }
  else {
    if (icon) {
      makeDraggable(icon, "IconBackPos");
      icon.addEventListener("dblclick", () => {
        if (XpWindows) {
          CreateWid(icon, "About Onu", "/wxp/IEX.ico", "/src/Cont/AboutPc/index.html", null, "330", "500", { windowOn: "NXPWindow", windowOff: "NXPWindowOff", windowInac: "NXPWindowINC", tBarOn: "NXPBarOn", tBarOff: "NXPBarOff", webOn: "webXPOs", ButtonM: "ButtonX", ButtonX: "ButtonC", ButImgX: "IconXP", ButImgM: "IconMP", appTab: "TbWinXp", windowMax: "NXPWindowMAX" });
        }
        else {
          CreateWid(icon, "About Onu", "My pc.png", "/src/Cont/AboutPc/index.html", null, "330", "500");
        }
      }
      )
    }
  }
}

ifScreenMQ(mq);

const xpStyleSaved = localStorage.getItem("XpWindowsEnabled");
if (xpStyleSaved === "true") {
  window.addEventListener("DOMContentLoaded", () => {
    Windows98Style()
  });
}

function ifcreenMQ(e) {
  if (e.matches) {
    if (iconXp) {
      iconXp.addEventListener("pointerdown", () => {
        if (XpWindows) {
          localStorage.setItem("XpWindowsEnabled", "true");
          localStorage.removeItem("desktop_windows")
          location.reload();
        } else {
          localStorage.removeItem("XpWindowsEnabled");
          localStorage.removeItem("desktop_windows")
          location.reload();
        }
      }
      )
    }
  }
  else {
    if (iconXp) {
      makeDraggable(iconXp, "IconXpPos");;
      iconXp.addEventListener("dblclick", () => {
        if (XpWindows) {
          localStorage.setItem("XpWindowsEnabled", "true");
          localStorage.removeItem("desktop_windows")
          location.reload();
        } else {
          localStorage.removeItem("XpWindowsEnabled");
          localStorage.removeItem("desktop_windows")
          location.reload();
        }
      }
      )
    }
  }
}

ifcreenMQ(mq);

function WindowsXPStyle() {
  XpWindows = false
  window.XpWindows = false;
  document.getElementById("Bar").id = "XpBar";
  document.getElementById("LineSp").id = "SpanNone";
  document.getElementById("LineWei").id = "SpanNone";
  document.getElementById("LineSp").id = "SpanNone";
  document.getElementById("LineWei").id = "SpanNone";
  document.getElementById("LineSp").id = "SpanNone";
  document.getElementById("IconAb").src = "/src/Props/Icons/wxp/IEX.ico";
  document.getElementById("HomeB").id = "HomeBXp";
  document.getElementById("WinBIcon").src = "/src/Props/Icons/wxp/WindowsXPIcon.png";
  document.getElementById("WinBIcon").id = "WinIconXP"
  document.getElementById("CalB").id = "CalBXp"
  document.getElementById("CalD").style.display = "none"
  document.getElementById("CalT").style.fontSize = "20px"
  document.getElementById("PanelTBM").id = "PanelTBMXp"
  document.getElementById("XpMarc").style.display = "flex"
  document.getElementById("IconBack").src = "/src/Props/Icons/wxp/MYPUS.ico"
  document.getElementById("MarcWind").style.display = "none"
  document.getElementById("LineSep").style.opacity = 0.2
  document.getElementById("LineSep").style.width = "90%"
  document.getElementById("LineSep").style.borderRadius = "10px"
  document.getElementById("MyMenu").src = "/src/Props/Icons/wxp/MYPUS.ico"
  document.getElementById("ExpMenu").src = "/src/Props/Icons/wxp/IEX.ico"
  document.getElementById("IconAb").id = "IconAbXp"
  document.getElementById("IconBackXp").src = "/src/Props/images/WinIcon.png"
  document.getElementById("IconBackXp").id = "IconAb98"
}

function Windows98Style() {
  XpWindows = false;
  window.XpWindows = true;
  document.getElementById("XpBar").id = "Bar";
  const spans = document.querySelectorAll("#SpanNone");
  if (spans.length >= 5) {
    spans[0].id = "LineSp";
    spans[1].id = "LineWei";
    spans[2].id = "LineSp";
    spans[3].id = "LineWei";
    spans[4].id = "LineSp";
  }
  document.getElementById("IconAbXp").id = "IconAb";
  document.getElementById("IconAb").src = "/src/Props/Icons/MIE.png"
  document.getElementById("HomeBXp").id = "HomeB";
  document.getElementById("WinIconXP").src = "/src/Props/images/WinIcon.png";
  document.getElementById("WinIconXP").id = "WinBIcon";
  document.getElementById("CalBXp").id = "CalB";
  document.getElementById("CalT").style.fontSize = "15px";
  document.getElementById("CalD").style.display = "initial";
  document.getElementById("PanelTBMXp").id = "PanelTBM";
  document.getElementById("XpMarc").style.display = "none";
  document.getElementById("IconBack").src = "/src/Props/Icons/My pc.png";
  const iconBackNew = document.getElementById("IconBack");
  if (iconBackNew) iconBackNew.id = "IconBack";
  document.getElementById("MarcWind").style.display = "initial";
  document.getElementById("LineSep").style.opacity = 1;
  document.getElementById("LineSep").style.width = "70%";
  document.getElementById("LineSep").style.borderRadius = "0px";
  document.getElementById("MyMenu").src = "/src/Props/Icons/My pc.png";
  document.getElementById("ExpMenu").src = "/src/Props/Icons/MIE.png";
  document.getElementById("IconBackXp").src = "/src/Props/Icons/wxp/WindowsXPIcon.png"

}

export { XpWindows };
