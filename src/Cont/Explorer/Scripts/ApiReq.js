const client_id = '522f34cf68374de8a9e64d04402ca9ba';
const client_secret = '6fe22a4da44a4828b0a7080acd8f2a6d';
const refresh_token = 'AQCwu9sCngTBnrgLqi-R1SBaoGuI1UFsYSwaIcSKboUpia8OXJXKOuIql5nsLb0hvKz6pHN6fjQ2JAzt1Ba4HyHKAvOPK7z9ytkuZGeQ7ir4a06oWRUuBSETRFmf6YWv7hY';

async function getAccessToken() {
  try {
    const auth = btoa(`${client_id}:${client_secret}`);

    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=refresh_token&refresh_token=${refresh_token}`,
    });

    if (!res.ok) {
      throw new Error(`Error obteniendo token: ${res.status}`);
    }

    const data = await res.json();
    return data.access_token;
  } catch (error) {
    console.error('Error en getAccessToken:', error);
    return null;
  }
}

async function getCurrentlyPlaying() {
  try {
    const token = await getAccessToken();
    
    if (!token) {
      console.log('No se pudo obtener el token de acceso');
      const spotifyElement = document.getElementById("SpotifySong");
      const titleElement = document.getElementById("TitleOth");
      if (spotifyElement) spotifyElement.style.display = "none";
      if (titleElement) titleElement.style.display = "none";
      return;
    }

    const res = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (res.status === 204) {
      console.log('No estás escuchando nada ahora mismo.');
      const spotifyElement = document.getElementById("SpotifySong");
      const titleElement = document.getElementById("TitleOth");
      if (spotifyElement) spotifyElement.style.display = "none";
      if (titleElement) titleElement.style.display = "none";
      return;
    }

    if (!res.ok) {
      throw new Error(`Error en la API de Spotify: ${res.status}`);
    }

    const data = await res.json();
    
    if (!data.item) {
      return;
    }

    const song = data.item;
    const track = data.item;

    const progressms = data.progress_ms || 0;
    const durationMs = track.duration_ms || 0;

    const Time = t => {
      const totalSeconds = Math.floor(t / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes}⁺${seconds.toString().padStart(2, '0')}`
    }

    const songElement = document.getElementById('Song');
    const albumArtElement = document.getElementById('AlbumArt');
    const artistElement = document.getElementById("Artist");
    const albumElement = document.getElementById("Album");
    const timeElement = document.getElementById("Time");
    const barIntElement = document.getElementById("BarInt");

    if (songElement) songElement.innerText = `⋆ ${song.name}`;
    if (albumArtElement && song.album.images && song.album.images[0]) {
      albumArtElement.src = song.album.images[0].url;
    }
    if (artistElement && song.artists && song.artists[0]) {
      artistElement.innerText = ` ${song.artists[0].name}`;
    }
    if (albumElement) albumElement.innerText = ` ${song.album.name}`;
    if (timeElement) timeElement.innerText = ` ${Time(progressms)} ♱ ${Time(durationMs)} `;
    if (barIntElement && durationMs > 0) {
      barIntElement.style.width = ` ${((progressms / durationMs) * 100).toFixed(1)}%`;
    }
  } catch (error) {
    console.error('Error en getCurrentlyPlaying:', error);
    const spotifyElement = document.getElementById("SpotifySong");
    const titleElement = document.getElementById("TitleOth");
    if (spotifyElement) spotifyElement.style.display = "none";
    if (titleElement) titleElement.style.display = "none";
  }
}

// Esperar a que el DOM esté listo antes de iniciar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    getCurrentlyPlaying();
    setInterval(getCurrentlyPlaying, 5000); // Cambiar a 5 segundos para no hacer demasiadas peticiones
  });
} else {
  getCurrentlyPlaying();
  setInterval(getCurrentlyPlaying, 5000);
}


// Renders
const ContainerImgs = document.getElementById("lastRender")

async function GetImages() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/esnokum-dacom/Renders-Images/refs/heads/main/Renders.json")
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    let LastId = null
    let LastImg = null

    data.images.forEach((img, index, array) => {
      if (index === array.length - 1) {
        LastId = img.id
        LastImg = img.imglink
        const RContainer = document.createElement("div")
        ContainerImgs.append(RContainer)

        const ImageTitle = document.createElement("h2")
        ImageTitle.innerText = img.name;
        ImageTitle.className = "bander"
        ImageTitle.id = "TTextBander"
        RContainer.appendChild(ImageTitle)

        const image = document.createElement('img');
        image.src = LastImg;
        image.className = "Render-img"
        RContainer.appendChild(image);
      }
    });

  } catch (error) {

  }
}

GetImages()
