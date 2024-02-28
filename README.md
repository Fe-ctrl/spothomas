Spothomas
Just a simple HTML, CSS, JS code that functions as a music player.

I've been programming for 6 months now, and I'm studying to improve. This is one of the first small projects I'm working on. I'll provide some instructions below for those who want to play with the code, add or remove songs, and how to do it.

One thing to note is that I haven't implemented responsive design for this project because, well, I'm lazy. If I do it in the future, I'll update it here.

1- This step is only necessary if you want to change the first song on the list because when you load the code, the JavaScript will only work after you change to another song and then go back to the first one.

<!--
  <div class="container-application">
  <h1>Spothomas</h1>
      <img src="./images/musica1.avif" id="music-img" />
  <div id="container-text-btn">
    <div id="container-text">
      <p id="number">Song 1</p>
      <p id="name">Pressure - Martin Garrix</p>
    </div>
 -->

So, you need to change the image source (src="./images/musica1.avif") and the name of the song (Pressure - Martin Garrix), that's it.

### Now, I believe that the other things you need to change will all be in the JS file.

2- The first one is if you want to change the number of songs on the site (the standard code has 7 songs), you just need to change the number.

  const musicNumbers = 7;

Just change the number.

3- I'll group these three together because you'll need to change basically the same stuff.

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

For the first and second functions, you just need to change to the name of the song you want (IMPORTANT: do this in the correct order). For the third one, you just need to change to the correct file name for your song's image.

4- This is important: the way I made the code limits you to use numbers for your song names (the file).

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

As you can see, the JavaScript identifies the songs by their file name numbers. So, just use the numbers 1, 2, 3, 4... for your songs, and you won't have any problems.


