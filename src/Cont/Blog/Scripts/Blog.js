const ContainerImgs = document.getElementById("MediaLogContainer")

async function GetMediaLog() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/esnokum-dacom/Log-Media/refs/heads/main/JSON/LogMedia.json")
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    data.allmedia
    data.allmedia.sort((a, b) => b.id - a.id)
      .forEach(media => {
        const RContainer = document.createElement("div")
        RContainer.className = "CdocAb"
        ContainerImgs.append(RContainer)

        const ImageTitle = document.createElement("h2")
        ImageTitle.innerText = media.medianame;
        ImageTitle.className = "Bander"
        ImageTitle.id = "TextBander"
        RContainer.appendChild(ImageTitle)

        const containerAbsolute = document.createElement("div")
        containerAbsolute.className = "eltodopoderoso"
        RContainer.appendChild(containerAbsolute)

        const ContainerLeft = document.createElement("div")
        ContainerLeft.className = "ContLeft"
        containerAbsolute.appendChild(ContainerLeft)

        const image = document.createElement('img');
        image.src = media.imageport;
        image.className = "Render-img"
        ContainerLeft.appendChild(image);

        const ContainerRight = document.createElement("div")
        ContainerRight.className = "ContRig"
        containerAbsolute.appendChild(ContainerRight)

        const score = document.createElement("h2")
        score.innerText = media.score
        ContainerRight.appendChild(score)

        const finished = document.createElement("p")
        if (media.finished) {
          finished.innerText = "Finished *"
        }
        else {
          finished.innerText = "In progress -"
        }
        ContainerRight.appendChild(finished)

        const date = document.createElement("p")
        date.innerText = media.date
        ContainerRight.appendChild(date)

        const thought = document.createElement("p")
        thought.className = "Thth"
        thought.innerText = media.thought
        ContainerRight.appendChild(thought)
      });

  } catch (error) {

  }
}

GetMediaLog()
