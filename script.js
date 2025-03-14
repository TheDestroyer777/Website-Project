function ChangePage() {
    let input = document.querySelector("input");
    let item = input.value.toLowerCase();

    if(item == "home"){
        location.href = "T:/Informatica%206G/website%20steam/Website-Project/home.html"
    } else if(item == "history"){
        location.href = "T:/Informatica%206G/website%20steam/Website-Project/history.html"
    } else if(item == "controls") {
        location.href = "T:/Informatica%206G/website%20steam/Website-Project/manualControls.html"
    } else if(item == "camera") {
        location.href = "T:/Informatica%206G/website%20steam/Website-Project/cameraLive-Feed.html"
    } else if(item == "weather") {
        location.href = "T:/Informatica%206G/website%20steam/Website-Project/weather.html"
    } else if(item == "video") {
        location.href = "T:/Informatica%206G/website%20steam/Website-Project/makingOf-Video.html"
    } else if(item == "poster") {
        location.href = "T:/Informatica%206G/website%20steam/Website-Project/makingOf-Poster.html"
    } else if(item == "logbook") {
        location.href = "T:/Informatica%206G/website%20steam/Website-Project/makingOf-Logbook.html"
    } else if(item == "faq") {
        location.href = "T:/Informatica%206G/website%20steam/Website-Project/makingOf-FAQ.html"
    }
}

function ChangePageEnter() {
    if (keycode = 13) {
        ChangePage();
    }
}