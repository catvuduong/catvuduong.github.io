let toggle = true;
toggleAudio = () => {
    toggle = toggle ? false : true;
    let audio = document.getElementById('myAudio');
    if (toggle) {
        console.log(toggle);
        audio.play();
        document.getElementById('audioButton').innerHTML = `<i class="fa fa-pause"></i>`;
    } else {
        audio.pause();
        document.getElementById('audioButton').innerHTML = `<i class="fa fa-play"></i>`;
    }
}
toggleAudio();