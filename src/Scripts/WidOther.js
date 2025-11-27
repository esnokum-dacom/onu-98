const WindoowsEmp = document.getElementById("Windows")
const TbBar = document.getElementById("buttonsTB")
const mq = window.matchMedia("(max-width: 590px)");

let windowCount = 0

const WindowStorage = {
  STORAGE_KEY: 'desktop_windows',

  saveAll(windows) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(windows));
    } catch (e) {
      console.error('Error guardando ventanas:', e);
    }
  },

  loadAll() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error cargando ventanas:', e);
      return [];
    }
  },

  saveWindow(windowData) {
    const windows = this.loadAll();
    const index = windows.findIndex(w => w.id === windowData.id);

    if (index >= 0) {
      windows[index] = windowData;
    } else {
      windows.push(windowData);
    }

    this.saveAll(windows);
  },

  removeWindow(windowId) {
    const windows = this.loadAll();
    const filtered = windows.filter(w => w.id !== windowId);
    this.saveAll(filtered);
  },

  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
};

const styles = {
  windowOn: 'NWindow',
  windowOff: "NWindowOff",
  windowInac: "NWindow",
  windowMax: "NWindowMAX",
  tBarOn: "NaWindowOn",
  tBarOff: "NaWindowOff",
  webOn: "abtWeb",
  ButtonX: "IcNav",
  ButtonM: "IcNav",
  ButImgX: "IcInt",
  ButImgM: "IcInt",
  appTab: "TbWin"
};

export default function CreateWid(Trigger, NameApp, IconApp, PageApp, savedData = null, Width, Height, cClass = {}) {
  let X = 0, Y = 0, SX = 0, SY = 0;
  const AppId = NameApp;
  windowCount++;

  const ClassSt = {}
  for (let key in styles) {
    ClassSt[key] = cClass[key] || styles[key];
  }

  const windowId = savedData?.id || `win_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const win = document.createElement("div");
  win.className = ClassSt.windowOn;
  win.style.width = `${Width}px`;
  win.style.height = `${Height}px`;

  const initialX = savedData?.x || Math.floor(Math.random() * 200 + 1);
  const initialY = savedData?.y || Math.floor(Math.random() * 200 + 1);
  win.style.left = initialX + "px";
  win.style.top = initialY + "px";

  if (savedData?.minimized) {
    win.classList.add(ClassSt.windowOff);
    win.classList.remove(ClassSt.windowOn);
  }

  if (savedData?.maximized) {
    win.className = ClassSt.windowMax;
  }

  win.dataset.id = windowId;
  WindoowsEmp.appendChild(win);

  const NavWindow = document.createElement("div");
  NavWindow.className = ClassSt.tBarOn;
  win.appendChild(NavWindow);

  const PointerAr = document.createElement("div")
  PointerAr.className = "ClickAreaOn"
  PointerAr.id = "ClickOBJ"
  win.appendChild(PointerAr)

  const explImgTab = document.createElement("img");
  explImgTab.src = `/src/Props/Icons/${IconApp}`;
  explImgTab.className = "TbAppITb";
  NavWindow.appendChild(explImgTab);

  const nAppW = document.createElement("p");
  nAppW.className = "InTbWin";
  nAppW.innerText = AppId;
  NavWindow.appendChild(nAppW);

  const NavCont = document.createElement("div");
  NavCont.className = "ContNavig";
  NavWindow.appendChild(NavCont);

  const iconC = document.createElement("button");
  iconC.className = ClassSt.ButtonX;
  NavCont.appendChild(iconC);

  const IconMX = document.createElement("button")
  IconMX.className = ClassSt.ButtonX
  NavCont.appendChild(IconMX)

  const iconM = document.createElement("button");
  iconM.className = ClassSt.ButtonM;
  NavCont.appendChild(iconM);

  const icX = document.createElement("img");
  icX.className = ClassSt.ButImgX;
  icX.src = "/src/Props/Icons/ekis.png";
  iconM.appendChild(icX);

  const icMX = document.createElement("img")
  icMX.className = ClassSt.ButImgM
  icMX.src = "../../src/Props/Icons/Maximize.png"
  IconMX.appendChild(icMX)

  const icM = document.createElement("img");
  icM.className = ClassSt.ButImgM;
  icM.src = "/src/Props/Icons/Mini.png";
  iconC.appendChild(icM);

  function saveCurrentState() {
    const windowData = {
      id: windowId,
      name: NameApp,
      icon: IconApp,
      page: PageApp,
      width: Width,
      height: Height,
      classes: ClassSt,
      x: parseInt(win.style.left),
      y: parseInt(win.style.top),
      minimized: win.classList.contains(ClassSt.windowOff),
      maximized: win.classList.contains(ClassSt.windowMax),
    };

    WindowStorage.saveWindow(windowData);
  }

  let Minimiz = false
  let maxim = false

  iconC.addEventListener("click", () => {
    Minimiz = true
    win.className = ClassSt.windowOff;
    saveCurrentState();
    console.log(Minimiz)
  });

  const TbWin = document.createElement("div");
  TbWin.className = ClassSt.appTab;
  TbWin.dataset.id = windowId;
  TbBar.appendChild(TbWin);

  TbWin.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    TbWin.remove();
    win.remove()
    WindowStorage.removeWindow(windowId);
  })

  const explImg = document.createElement("img");
  explImg.src = `/src/Props/Icons/${IconApp}`;
  explImg.className = "TbAppI";
  TbWin.appendChild(explImg);

  const nWind = document.createElement("p");
  nWind.className = "InTbN";
  nWind.innerText = AppId;
  TbWin.appendChild(nWind);

  IconMX.addEventListener("click", () => {
    if (win.className == ClassSt.windowMax) {
      win.className = ClassSt.windowOn
      maxim = false
    }
    else {
      win.className = ClassSt.windowMax
      maxim = true
    }
    saveCurrentState();
  })

  iconM.addEventListener("click", () => {
    win.remove();
    TbWin.remove();
    WindowStorage.removeWindow(windowId);
  });

  TbWin.addEventListener("click", () => {
    if (win.classList.contains(ClassSt.windowOn) && NavWindow.classList.contains(ClassSt.tBarOn)) {
      win.className = ClassSt.windowOff;
      NavWindow.className = ClassSt.tBarOff
    }
    else if (win.classList.contains(ClassSt.windowInac)) {
      win.className = ClassSt.windowOn;
      NavWindow.className = ClassSt.tBarOn
      focusWindow(win, NavWindow, ClassSt, PointerAr);
    }
    else if (NavWindow.classList.contains(ClassSt.tBarOff) && win.classList.contains(ClassSt.windowOn)) {
      focusWindow(win, NavWindow, ClassSt, PointerAr);
    }
    else if (maxim == false && win.classList.contains(ClassSt.windowOff)) {
      win.className = ClassSt.windowOn;
      NavWindow.className = ClassSt.tBarOn
      focusWindow(win, NavWindow, ClassSt, PointerAr);
      maxim = false
    }
    else if (win.classList.contains(ClassSt.windowOn)) {
      win.className = ClassSt.windowOff;
      NavWindow.className = ClassSt.tBarOff
      focusWindow(win, NavWindow, ClassSt, PointerAr);
    }
    else if (win.classList.contains(ClassSt.windowMax) && NavWindow.classList.contains(ClassSt.tBarOff)) {
      focusWindow(win, NavWindow, ClassSt, PointerAr);
    }
    else if (maxim == true && win.classList.contains(ClassSt.windowMax)) {
      win.className = ClassSt.windowOff;
      NavWindow.className = ClassSt.tBarOff
      maxim = true
    }
    else if (maxim == true && win.classList.contains(ClassSt.windowOff)) {
      win.className = ClassSt.windowMax;
      NavWindow.className = ClassSt.tBarOn
    }
    PointerAr.className = "ClickAreaOff";
    saveCurrentState();
  });

  PointerAr.addEventListener("click", () => {
    focusWindow(win, NavWindow, ClassSt, PointerAr);
    if (win.classList.contains(ClassSt.windowInac) && NavWindow.classList.contains(ClassSt.tBarOn)) {
      win.className = ClassSt.windowInac;
      NavWindow.className = ClassSt.tBarOff
      focusWindow(win, NavWindow, ClassSt, PointerAr);
    }
    else if (NavWindow.classList.contains(ClassSt.windowOff) && win.classList.contains(ClassSt.windowOn)) {
      focusWindow(win, NavWindow, ClassSt, PointerAr);
    }
    else if (win.classList.contains(ClassSt.windowInac)) {
      win.className = ClassSt.windowOn;
      NavWindow.className = ClassSt.tBarOn
      focusWindow(win, NavWindow, ClassSt, PointerAr);
    }
    PointerAr.className = "ClickAreaOff";
    saveCurrentState();
  });

  NavWindow.addEventListener("pointerdown", StopM);

  function StopM(e) {
    SX = e.clientX;
    SY = e.clientY;
    document.addEventListener("pointermove", mMove);
    document.addEventListener("pointerup", mUp);

    e.target.setPointerCapture(e.pointerId);
  }

  function mMove(e) {
    X = SX - e.clientX;
    Y = SY - e.clientY;
    SX = e.clientX;
    SY = e.clientY;

    win.className = ClassSt.windowOn

    win.style.top = `${win.offsetTop - Y}px`;
    win.style.left = `${win.offsetLeft - X}px`;
  }

  function mUp(e) {
    document.removeEventListener("pointermove", mMove);
    document.removeEventListener("pointerup", mUp);
    try {
      e.target.releasePointerCapture(e.pointerId);
    } catch {}

    saveCurrentState();
  }

  win.addEventListener("mousedown", () => {
    focusWindow(win, NavWindow, ClassSt, PointerAr);
  });

  const webIfP = document.createElement("iframe");
  webIfP.src = PageApp;
  webIfP.className = ClassSt.webOn;
  win.appendChild(webIfP);

  saveCurrentState();

  if (!savedData) {
    saveCurrentState();
  }

  function windowMQ(e) {
    if (e.matches) {
      win.className = ClassSt.windowMax
      maxim = true
    }
  }

  windowMQ(mq)

  focusWindow(win, NavWindow, ClassSt, PointerAr);

  return windowId;
}

function restoreWindows() {
  const savedWindows = WindowStorage.loadAll();

  savedWindows.forEach(windowData => {
    CreateWid(
      null,
      windowData.name,
      windowData.icon,
      windowData.page,
      windowData,
      windowData.width,
      windowData.height,
      windowData.classes
    );
  });
}
window.addEventListener('DOMContentLoaded', () => {
  restoreWindows();
});

window.CreateWid = CreateWid;

export { WindowStorage, restoreWindows, styles };

const windows = WindowStorage.loadAll();
console.log('Ventanas guardadas:', windows);

function focusWindow(win, navWin, ClassSt, pointerAr) {
  let maxZIndex = 0;
  document.querySelectorAll('.' + ClassSt.windowOn + ', .' + ClassSt.windowInac + ', .' + ClassSt.windowMax)
    .forEach(w => {
      const currentZIndex = parseInt(w.style.zIndex) || 0;
      if (currentZIndex > maxZIndex) {
        maxZIndex = currentZIndex;
      }

      if (w.classList.contains(ClassSt.windowMax)) {
      } else {
        w.className = ClassSt.windowInac;
      }
      const pointer = w.querySelector('.ClickAreaOn, .ClickAreaOff');
      if (pointer) pointer.className = "ClickAreaOn";
    });

  if (win.classList.contains(ClassSt.windowMax)) {
    win.className = ClassSt.windowMax;
  } else {
    win.className = ClassSt.windowOn;
  }
  win.style.zIndex = (maxZIndex + 1).toString();

  document.querySelectorAll('.' + ClassSt.tBarOn + ', .' + ClassSt.tBarOff)
    .forEach(t => t.className = ClassSt.tBarOff);
  navWin.className = ClassSt.tBarOn;
  if (pointerAr) pointerAr.className = "ClickAreaOff";
}
