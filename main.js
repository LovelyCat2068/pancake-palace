objects=[];
sausage = "";

function setup(){
    canvas = createCanvas(500, 300);
    canvas.center();
    video.hide();


}

function preload(){
    video = createVideo("video.mp4");
}

function draw(){
    image(video, 0 ,0, 500, 300);
}

function start(){
    pastry= ml5.objectDetector("cocossd", pumpkin);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"; 
}

function pumpkin(){
    console.log("fried");
    video.loop();
    video.speed(1);
    video.volume(0);
    sausage = true;
}

