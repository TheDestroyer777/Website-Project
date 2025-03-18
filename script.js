function ChangePage() {
    let input = document.querySelector("input");
    let item = input.value.toLowerCase();

    if(item == "home"){
        location.href = "home.html"
    } else if(item == "history"){
        location.href = "history.html"
    } else if(item == "controls") {
        location.href = "manualControls.html"
    } else if(item == "camera") {
        location.href = "cameraLive-Feed.html"
    } else if(item == "weather") {
        location.href = "weather.html"
    } else if(item == "video") {
        location.href = "makingOf-Video.html"
    } else if(item == "poster") {
        location.href = "makingOf-Poster.html"
    } else if(item == "logbook") {
        location.href = "makingOf-Logbook.html"
    } else if(item == "faq") {
        location.href = "makingOf-FAQ.html"
    }
}

function ChangePageEnter() {
    if (keycode = 13) {
        ChangePage();
    }
}