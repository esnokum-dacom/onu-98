import CreateWid from "./WidOther.js";

function makeDraggable(element, storageKey) {
  let startX = 0, startY = 0;
  let elX = 0, elY = 0;

  const posGuardada = JSON.parse(localStorage.getItem(storageKey));
  document.addEventListener("DOMContentLoaded", () => {
    if (posGuardada) {
      element.style.left = posGuardada.left + "%";
      element.style.top = posGuardada.top + "%";
    }
  })

  if (posGuardada) {
    element.style.left = posGuardada.left + "%";
    element.style.top = posGuardada.top + "%";
  }

  element.style.touchAction = "none";

  element.addEventListener("pointerdown", (e) => {
    e.preventDefault();

    startX = e.clientX;
    startY = e.clientY;

    const rect = element.getBoundingClientRect();
    elX = rect.left;
    elY = rect.top;

    document.addEventListener("pointermove", moveHandler);
    document.addEventListener("pointerup", upHandler);
  });

  function moveHandler(e) {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    let newX = elX + dx;
    let newY = elY + dy;

    const maxX = window.innerWidth - element.offsetWidth;
    const maxY = window.innerHeight - element.offsetHeight;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    element.style.left = newX + "px";
    element.style.top = newY + "px";
  }

  function upHandler() {
    document.removeEventListener("pointermove", moveHandler);
    document.removeEventListener("pointerup", upHandler);

    const leftPercent = (element.offsetLeft / window.innerWidth) * 100;
    const topPercent = (element.offsetTop / window.innerHeight) * 100;

    localStorage.setItem(storageKey, JSON.stringify({
      left: leftPercent,
      top: topPercent
    }));
  }

}

const icon = document.getElementById("IconBack");
const iconBooks = document.getElementById("IconBooks");
const iconXp = document.getElementById("IconBackXp");

let XpWindows = true

const mq = window.matchMedia("(max-width: 600px)");

function ifScreenMQ(e) {
  if (e.matches) {
    makeDraggable(icon, "IconBackPos");
    if (icon) {
      icon.addEventListener("click", () => {
        if (XpWindows) {
          CreateWid(icon, "About Onu", "/wxp/MYPUS.ico", "/src/Cont/AboutPc/index.html", null, "330", "500", { windowOn: "NXPWindow", windowOff: "NXPWindowOff", windowInac: "NXPWindowINC", tBarOn: "NXPBarOn", tBarOff: "NXPBarOff", webOn: "webXPOs", ButtonM: "ButtonX", ButtonX: "ButtonC", ButImgX: "IconXP", ButImgM: "IconMP", appTab: "TbWinXp", windowMax: "NXPWindowMAX" });
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
          CreateWid(icon, "About Onu", "/wxp/MYPUS.ico", "/src/Cont/AboutPc/index.html", null, "330", "500", { windowOn: "NXPWindow", windowOff: "NXPWindowOff", windowInac: "NXPWindowINC", tBarOn: "NXPBarOn", tBarOff: "NXPBarOff", webOn: "webXPOs", ButtonM: "ButtonX", ButtonX: "ButtonC", ButImgX: "IconXP", ButImgM: "IconMP", appTab: "TbWinXp", windowMax: "NXPWindowMAX" });
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
  makeDraggable(iconXp, "IconXpPos");
  if (e.matches) {
    if (iconXp) {
      iconXp.addEventListener("click", () => {
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

function BookIco(e) {
  makeDraggable(iconBooks, "IconBookPos");
  if (e.matches) {
    if (iconBooks) {
      iconBooks.addEventListener("click", () => {
        if (XpWindows) {
          CreateWid(iconBooks, "Books", "/wxp/Bloc.ico", "/src/Cont/Books/index.html", null, "330", "500", { windowOn: "NXPWindow", windowOff: "NXPWindowOff", windowInac: "NXPWindowINC", tBarOn: "NXPBarOn", tBarOff: "NXPBarOff", webOn: "webXPOs", ButtonM: "ButtonX", ButtonX: "ButtonC", ButImgX: "IconXP", ButImgM: "IconMP", appTab: "TbWinXp", windowMax: "NXPWindowMAX" });
        }
        else {
          CreateWid(iconBooks, "Books", "/wxp/Bloc.ico", "/src/Cont/AboutPc/index.html", null, "330", "500");
        }
      }
      )
    }
  }
  else {
    if (iconBooks) {
      makeDraggable(iconBooks, "IconBookPos");
      iconBooks.addEventListener("dblclick", () => {
        if (XpWindows) {
          CreateWid(iconBooks, "Books", "/wxp/Bloc.ico", "/src/Cont/Books/index.html", null, "900", "600", { windowOn: "NXPWindow", windowOff: "NXPWindowOff", windowInac: "NXPWindowINC", tBarOn: "NXPBarOn", tBarOff: "NXPBarOff", webOn: "webXPOs", ButtonM: "ButtonX", ButtonX: "ButtonC", ButImgX: "IconXP", ButImgM: "IconMP", appTab: "TbWinXp", windowMax: "NXPWindowMAX" });
        }
        else {
          CreateWid(iconBooks, "Books", "/wxp/Bloc.ico", "/src/Cont/Books/index.html", null, "900", "600");
        }
      }
      )
    }
  }
}

BookIco(mq)

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
