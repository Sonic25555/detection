img="";
function preload(){
    img=loadImage("https://upload.wikimedia.org/wikipedia/commons/2/2f/Paper_450x450.jpg");
}
function setup(){
    canvas=createCanvas(300,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}
function draw(){
    image(img,0,0,300,420);
    fill("#FF0000");
    text("pen",100,75);
    noFill();
    stroke("#FF0000");
    rect(10,100,400,260);
}
function modelLoaded(){
    console.log("Model Loaded");
}