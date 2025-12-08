const ContainerImgs = document.getElementById("MediaLogContainer")

async function GetMediaLog() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/esnokum-dacom/Log-Media/refs/heads/main/JSON/LogMedia.json")
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const Music = data.allmedia.filter(item => item.type === "Music")
    const Anime = data.allmedia.filter(item => item.type === "Animé")
    const Serie = data.allmedia.filter(item => item.type === "Serie")
     
      Music
      .reverse()
      .forEach(media => {
        const ContainerMusic = document.getElementById("ContainerMusic")
        ContainerImgs.append(ContainerMusic)

        const serpr = document.createElement("div");
        serpr.className = "sepC"
        ContainerMusic.appendChild(serpr)

        const InterContainer = document.createElement("div")
        InterContainer.className = "PostMedia"
        ContainerMusic.append(InterContainer)

        const RContainer = document.createElement("div")
        RContainer.className = "CdocAb"
        InterContainer.append(RContainer)

        const ImageTitle = document.createElement("h2")
        ImageTitle.innerText = media.medianame;
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

        const containerTH = document.createElement("div")
        containerTH.className = "CdocAb"
        InterContainer.appendChild(containerTH)

        const IdTh = document.createElement("h2")
        IdTh.innerText = "Thought"
        IdTh.id = "TextBander"
        IdTh.style.textAlign = "center"
        containerTH.appendChild(IdTh)

        const thought = document.createElement("p")
        thought.className = "Thth"
        thought.innerText = media.thought
        containerTH.appendChild(thought)
      });

      Anime
      .reverse()
      .forEach(media => {
        const ContainerAnimes = document.getElementById("ContainerAnimes")
        ContainerImgs.append(ContainerMusic)

        const InterContainer = document.createElement("div")
        InterContainer.className = "PostMedia"
        ContainerAnimes.append(InterContainer)

        const serpr = document.createElement("div");
        serpr.className = "sepC"
        ContainerAnimes.appendChild(serpr)

        const RContainer = document.createElement("div")
        RContainer.className = "CdocAb"
        InterContainer.append(RContainer)

        const ImageTitle = document.createElement("h2")
        ImageTitle.innerText = media.medianame;
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

        const containerTH = document.createElement("div")
        containerTH.className = "CdocAb"
        InterContainer.appendChild(containerTH)

        const IdTh = document.createElement("h2")
        IdTh.innerText = "Thought"
        IdTh.id = "TextBander"
        IdTh.style.textAlign = "center"
        containerTH.appendChild(IdTh)

        const thought = document.createElement("p")
        thought.className = "Thth"
        thought.innerText = media.thought
        containerTH.appendChild(thought)
      });

      Serie
      .reverse()
      .forEach(media => {
        const ContainerSerie = document.getElementById("ContainerSeries")
        ContainerImgs.append(ContainerMusic)

        const serpr = document.createElement("div");
        serpr.className = "sepC"
        ContainerSerie.append(serpr)

        const InterContainer = document.createElement("div")
        InterContainer.className = "PostMedia"
        ContainerSerie.append(InterContainer)

        const RContainer = document.createElement("div")
        RContainer.className = "CdocAb"
        InterContainer.append(RContainer)

        const ImageTitle = document.createElement("h2")
        ImageTitle.innerText = media.medianame;
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

        const containerTH = document.createElement("div")
        containerTH.className = "CdocAb"
        InterContainer.appendChild(containerTH)

        const IdTh = document.createElement("h2")
        IdTh.innerText = "Thought"
        IdTh.id = "TextBander"
        IdTh.style.textAlign = "center"
        containerTH.appendChild(IdTh)

        const thought = document.createElement("p")
        thought.className = "Thth"
        thought.innerText = media.thought
        containerTH.appendChild(thought)
      });

  } catch (error) {
    console.error(error)
  }
}

GetMediaLog()
