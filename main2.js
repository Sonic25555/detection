img="";
function preload(){
    img=loadImage("23.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("cat",245,60);
    noFill();
    stroke("#FF0000");
    rect(240,50,200,330);
}
function modelLoaded(){
    console.log("Model Loaded");
}