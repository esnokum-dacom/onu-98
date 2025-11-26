const MenuTB = document.getElementById("PanelTBMXp")
const MenuB = document.getElementById("HomeBXp")
const TextCal = document.getElementById("CalT")
const TextDat = document.getElementById("CalD")
let activeButton = null

function TimeInt() {
  let Time = new Date()
  let Hour = Time.getHours().toString().padStart(2, '0')
  let Min = Time.getMinutes().toString().padStart(2, '0')
  TextCal.innerText = `${Hour}:${Min}`
}

function TimeCal() {
  let TimeC = new Date()
  let Day = TimeC.getDate().toString()
  let Month = TimeC.getMonth().toString()
  let Year = TimeC.getFullYear().toString()
  TextDat.innerText = `${Day}/${Month}/${Year}`
}

setInterval(TimeCal, 1)
setInterval(TimeInt, 1)

MenuB.addEventListener("click", () => {
  if (activeButton === "ABM") {
    MenuTB.className = "MenuCl"
    activeButton = null
    document.getElementById("MenuTriggerOn").id = "MenuTriggerOff"
  } else {
    MenuTB.className = "MenuOp"
    activeButton = "ABM"
    document.getElementById("MenuTriggerOff").id = "MenuTriggerOn"
  }
})

document.getElementById("MenuTriggerOff").addEventListener("click", () => {
  MenuTB.className = "MenuCl"
  activeButton = null
  document.getElementById("MenuTriggerOn").id = "MenuTriggerOff"
})

document.getElementById("Windows").addEventListener("click", () => {
  MenuTB.className = "MenuCl"
  activeButton = null
})
