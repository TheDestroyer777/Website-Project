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

/*weather*/
!function(d,s,id)
    {var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id))
        {js=d.createElement(s);
            js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
            fjs.parentNode.insertBefore(js,fjs);
        }
    }
(document,'script','weatherwidget-io-js');



/*Test https://github.com/WallNutss/esp32websockets-epucks */

 // Getting the button
    const control = document.querySelectorAll("button")
    let ws;

    function init(){
        if(ws){
            ws.onerror = ws.onopen = ws.onclose = null;
            ws.close();
        }
        let HOST = location.origin.replace(/^http/, 'ws')
        //let HOST = "ws://127.0.0.1:5000"
        console.log(HOST)
        ws = new WebSocket(HOST);
        ws.onopen = ()=>{
            console.log('Connection Open');
        }
        ws.onclose = function(){
            ws = null;
        }
    }
    // Listening to each button controller, dekstop or on mobile
    // Where each button have different respond, according to their ID
    control.forEach(c =>{
        c.addEventListener('mousedown',(e)=>{
        if(!ws){
            console.log("No Websocket Connection")
        }
        const command = e.target.id
        ws.send(command)
        })

        c.addEventListener('mouseup',(e)=>{
        if(!ws){
            console.log("No Websocket Connection")
        }
        const command = "brake"
        ws.send(command)
        })

        c.addEventListener('touchstart',(e)=>{
            if(!ws){
            console.log("No Websocket Connection")
            }
        const command = e.target.id
        ws.send(command)
        })

        c.addEventListener('touchend',(e)=>{
            if(!ws){
            console.log("No Websocket Connection")
            }
        const command = "brake"
        ws.send(command)
        })
    })

    init();