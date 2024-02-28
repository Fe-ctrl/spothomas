const buttonPlay = document.getElementsByClassName('play')[0];
const buttonPause = document.getElementsByClassName('pause')[0];
const passButton = document.getElementsByClassName('arrow-right')[0];
const returnButton = document.getElementsByClassName('arrow-left')[0];
const musicNumber = document.getElementById('number');
const musicName = document.getElementById('name');
const musicImage = document.getElementById('music-img');

const audioMusic = document.getElementById('music-audio');
const volumeRange = document.getElementById('volume-range');

let progress = document.getElementById('progress');
let curr_time = document.getElementById("curr-time");
let total_duration = document.getElementById("total-duration");

const musicNumbers = 7;
let isPlaying = false;
let currentMusic = 1;

// Play, pause music

function playMusic() {
    audioMusic.play();
    isPlaying = true;
    buttonPlay.style.display = 'block';
    buttonPause.style.display = 'none';
}

function pauseMusic() {
    audioMusic.pause();
    isPlaying = false;
    buttonPlay.style.display = 'none';
    buttonPause.style.display = 'block';
}

function playPause() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

// Current name,number, image

function currentNumber() {
    musicNumber.innerText = 'Música ' + currentMusic;
}

function currentName() {
    const musicNames = [
        "Pressure - Martin Garrix",
        "SPECIALZ - King GNU",
        "Superhero - Metro Boomin",
        "Mayonaka no Door - Miki Matsubara",
        "buzzkill - MOTHICA",
        "See You Again - Tyler, the Creator, Kali Uchis",
        "Hacking to the Gate - Kanako Itō"
    ];

    musicName.innerText = musicNames[currentMusic - 1];
}

function currentMusicRange() {
    const musicNames = [
        "Pressure - Martin Garrix",
        "SPECIALZ - King GNU",
        "Superhero - Metro Boomin",
        "Mayonaka no Door - Miki Matsubara",
        "buzzkill - MOTHICA",
        "See You Again - Tyler, the Creator, Kali Uchis",
        "Hacking to the Gate - Kanako Itō"
    ];

    musicName.innerText = musicNames[currentMusic - 1];
}

function currentImage() {
    const musicImages = [
        "./images/musica1.avif",
        "./images/musica2.jpg",
        "./images/musica3.jpg",
        "./images/musica4.jpg",
        "./images/musica5.jpg",
        "./images/musica6.jpg",
        "./images/musica7.jpg"
    ];

    document.getElementById('music-img').src = musicImages[currentMusic - 1];
}

// Pass, return music

function passMusic() {
    if (currentMusic === musicNumbers) {
        currentMusic = 1;
    } else {
        currentMusic++;
    }

    audioMusic.src = './musics/' + currentMusic + '.mp3';
    playMusic();
    currentNumber();
    currentName();
    currentImage();
}

function returnMusic() {
    if (currentMusic === 1) {
        currentMusic = musicNumbers;
    } else {
        currentMusic--;
    }

    audioMusic.src = './musics/' + currentMusic + '.mp3';
    playMusic();
    currentNumber();
    currentName();
    currentImage();
}

buttonPlay.addEventListener('click', playPause);
buttonPause.addEventListener('click', playPause);
passButton.addEventListener('click', passMusic);
returnButton.addEventListener('click', returnMusic);

// Audio bar

audioMusic.onloadedmetadata = function() {
    progress.max = audioMusic.duration;
    total_duration.textContent = formatTime(audioMusic.duration);
}

audioMusic.addEventListener('timeupdate', function() {
    progress.value = audioMusic.currentTime;
    curr_time.textContent = formatTime(audioMusic.currentTime);
});

progress.addEventListener('input', function() {
    audioMusic.currentTime = progress.value;
});

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    secs = (secs >= 10) ? secs : "0" + secs;
    return minutes + ":" + secs;
}

// Volume

volumeRange.addEventListener('input', function() {
    audioMusic.volume = volumeRange.value;
});

// Current and max time

audioMusic.addEventListener('timeupdate', function() {
    progress.value = audioMusic.currentTime;
    curr_time.textContent = formatTime(audioMusic.currentTime);
});

audioMusic.onloadedmetadata = function() {
    progress.max = audioMusic.duration;
    total_duration.textContent = formatTime(audioMusic.duration);
}