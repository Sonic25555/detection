img="";
function preload(){
    img=loadImage("https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:good,w_700/legacy_dam/en-ca/s001253113/CA-Everyday-Ballpoint-Pen-Overview-image-001");
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
    text("pen",100,75);
    noFill();
    stroke("#FF0000");
    rect(85,65,450,330);
}
function modelLoaded(){
    console.log("Model Loaded");
}