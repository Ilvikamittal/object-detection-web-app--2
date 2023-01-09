img="";
status="";

function preload(){
    img=loadImage("CatDogImg.webp");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
    image(img, 0,0,640,420);
    fill("red");
    textSize(20);
    text("Cat",200,40);
    noFill();
    stroke("red");
    rect(180,25,250,130);

    fill("purple");
    text("Dog Food",150,270);
    noFill();
    stroke("purple");
    rect(130,250,150,100);


    fill("orange");
    text("Dog",380,150);
    noFill();
    stroke("orange");
    rect(360,130,200,230);

    fill("blue");
    text("Bone",350,300);
    noFill();
    stroke("blue");
    rect(330,280,100,80);

}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results)
    }
}
