const ContainerBooks = document.getElementById("BookCase")
const mq = window.matchMedia("(max-width: 600px)");

async function GetMediaLog() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/esnokum-dacom/Books/refs/heads/main/Json/Books.json")
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    let zi = data.books.length;
    let tman = data.books.length + 3

    data.books
      .forEach(media => {
        zi--
        tman--

        const RContainer = document.createElement("div")
        RContainer.className = "ContBook"
        RContainer.style.zIndex = zi
        RContainer.style.animation = `floating ${tman}s infinite cubic-bezier(.65, .19, .29, 1.04)`
        if (mq.matches) {
          RContainer.style.animation = ""
        }
        ContainerBooks.append(RContainer)

        const overlay = document.createElement("div")
        overlay.className = "overlay"
        RContainer.appendChild(overlay)

        const innerContainer = document.createElement("div")
        innerContainer.className = "ContBookEXT"
        RContainer.appendChild(innerContainer)

        const image = document.createElement('img');
        image.src = media.bookart;
        image.className = "left"
        innerContainer.appendChild(image);

        const front = document.createElement("div")
        front.className = "front"
        innerContainer.appendChild(front)

        const ImageTitle = document.createElement("h2")
        ImageTitle.innerText = media.bookname;
        ImageTitle.id = "BookName"
        front.appendChild(ImageTitle)

        const opCont = document.createElement("div")
        opCont.className = "OpCont"
        RContainer.appendChild(opCont)

        const IdTh = document.createElement("h2")
        IdTh.innerText = `- ${media.bookname} `
        IdTh.className = "TITOP"
        opCont.appendChild(IdTh)

        const opT = document.createElement("p")
        opT.className = "opinion"
        opT.innerText = "Opionion"
        opCont.appendChild(opT)

        const thought = document.createElement("p")
        thought.className = "opinion"
        thought.innerText = media.opinion
        opCont.appendChild(thought)

        const FN = document.createElement("p")
        FN.className = "opinion"
        opCont.appendChild(FN)

        if (!media.finished) {
          FN.innerText = "State - In progress"
        }
        else {
          FN.innerText = "State - Finished"
        }

        if (!media.finished) {
          image.classList.add("fn")
        } else {
          image.classList.remove("fn")
        }

        let ACT = false;

        document.querySelectorAll(".overlay").forEach(a => {
          a.addEventListener("click", () => {
            ACT = !ACT
            document.querySelectorAll(".ContBookEXT").forEach(e => {
              e.classList.add("active");
              e.style.transform = "rotate3d(0, 1, 0, 90deg)";
            });
            document.querySelectorAll(".overlay").forEach(f => {
              f.classList.add("active");
              f.style.width = "200px";
              f.style.left = "-40px";
              if (mq.matches) {
                f.style.left = "94px";
              }
            });

            document.querySelectorAll(".OpCont").forEach(n => {
              n.classList.remove("activeOp");
            });
            if (ACT) {
              const contBookExt = a.parentElement.querySelector(".ContBookEXT");
              if (contBookExt) {
                contBookExt.classList.remove("active");
              }

              const overlayCont = a.parentElement.querySelector(".overlay");
              if (overlayCont) {
                overlayCont.classList.remove("active");
              }

              const Contop = a.parentElement.querySelector(".OpCont");
              if (Contop) {
                Contop.classList.add("activeOp");
              }
            }
            else {
              document.querySelectorAll(".ContBookEXT").forEach(e => {
                e.classList.remove("active");
                e.style.transform = "rotate3d(0, 1, 0, 45deg)";
              });
              document.querySelectorAll(".overlay").forEach(e => {
                e.classList.remove("active");
                e.style.left = "-52px";
                if (mq.matches) {
                  e.style.left = "89px";
                }
              });
              document.querySelectorAll(".OpCont").forEach(e => {
                e.classList.remove("activeOp");
              });
            }
          });
        });
      });

  } catch (error) {
    console.error(error)
  }
}

GetMediaLog()

window.addEventListener("rezise", GetMediaLog)
