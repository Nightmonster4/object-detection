img = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Dog", 45, 75);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350);

    fill("red");
    text("Cat", 70, 85);
    nofill();
    stroke("red");
    rect(40, 80, 450, 350);
}