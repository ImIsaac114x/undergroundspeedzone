function myFunction() {
       fileArray = ["/sources/music/2004_Beat_2_EQ.mp3", "/sources/music/2004_Beat_3_EQ.mp3", "/sources/music/2004_Beat_4_EQ.mp3", "/sources/music/2004_Beat_5_EQ.mp3", "/sources/music/2004_Beat_6_EQ.mp3"];
       var num = Math.floor(Math.random() * fileArray.length);
       var x = document.getElementById("music");
       x.src = fileArray[num]; 

       var audio = document.getElementById("music");
       audio.volume = 0.2;
       audio.autoplay = true;
       audio.load();
    }

    myFunction()