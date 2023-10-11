let progerss  = document.getElementById("progress");
        let song  = document.getElementById("song");
        let controlIcon  = document.getElementById("controlIcon");

        //<!-- anonymous function -->
        song.onloadedmetadata = function(){
            progerss.max = song.duration;
            progerss.value = song.currentTime;
        }

        function playPause(){
            if(controlIcon.classList.contains("fa-pause")){
                song.pause();
                controlIcon.classList.remove("fa-pause");
                controlIcon.classList.add("fa-play");

            }
            else{
                song.play();
                controlIcon.classList.add("fa-pause");
                controlIcon.classList.remove("fa-play");
                
            }
        }

        if(song.play()){
            setInterval(()=>{
                progerss.value = song.currentTime;
            },500);
        }
        progerss.onchange = function(){
            song.play();
            song.currentTime = progerss.value;
            controlIcon.classList.add("fa-pause");
            controlIcon.classList.remove("fa-play")
        }