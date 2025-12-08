document.getElementById("Others").addEventListener("click", () => {
  document.getElementById("Others").innerText = "*Overview"
  document.getElementById("Learn").innerText = "Learn"

  document.getElementById("TitleB1").innerText = "Linux"
  document.getElementById("InfoB1").innerText = "I love the system Linux, i love use this and i have one in arch linux, i love the personalization and modification can i have in SO linux"

  document.getElementById("TitleB2").innerText = "Programming"
  document.getElementById("InfoB2").innerText = "Well... is not surprise i love programming, this site took me 3 moths in mount from scratch, i want to learn more technologies, like java, c++ or c#, etc."

  document.getElementById("TitleB3").innerText = "Calisthenics"
  document.getElementById("InfoB3").innerText = "My favorite time in my day is practice handstand and do push ups like crazy, i want to be more strong, i love more calisthenics than common gym"
})

document.getElementById("Learn").addEventListener("click", () => {
  document.getElementById("Others").innerText = "Overview"
  document.getElementById("Learn").innerText = "*Learn"

  document.getElementById("TitleB1").innerText = "Books"
  document.getElementById("InfoB1").innerText = "I like to read books, is my favourite activity for too many reasons, but i know is not wow but i want to be more cult, yeah i like to read books. I want begin more but... i stuck with 4 books."

  document.getElementById("TitleB2").innerText = "Series"
  document.getElementById("InfoB2").innerText = "I like to watch series, like the witcher, You, karma (from netflix), etc. i like to watch series. I want to begin more series"

  document.getElementById("TitleB3").innerText = "Animes"
  document.getElementById("InfoB3").innerText = "I start to watch more animes, i start with a anime called 'Serial experiments lain', is too good and i like this anime for psychological reasons. I want to start with manwhas..."
})

let StickCha = false

function ChangeStick() {
  if (!StickCha) {
    document.getElementById("DanceStick").innerText = " (O⠀ ⠀I) (("
  }
  else {
    document.getElementById("DanceStick").innerText = " ⠀O)(I ⠀))"
  }
}

function ChangeTriggerStick() {
  StickCha = !StickCha
  ChangeStick()
}

setInterval(ChangeTriggerStick, 500)
