canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_height = 70;
car1_width = 120;
car1_x = 10;
car1_y = 10;
car1_img = "car 0.1.png";
car2_height = 70;
car2_width = 120;
car2_x = 10;
car2_y = 10;
car2_img = "car 0.11.png";
background_image = "racing.jpeg";
function add(){
    background_imageTag = new Image(); // defending a variable with a new image
    background_imageTag.onload = uploadBackground; // setting a function, onloading a variable
    background_imageTag.src = background_image; // load image

    car1_imgTag = new Image(); // defending a variable with a new image
    car1_imgTag.onload = uploadcar1; // setting a function, onloading a variable
    car1_imgTag.src = car1_img; // load image

    car2_imgTag = new Image(); // defending a variable with a new image
    car2_imgTag.onload = uploadcar2; // setting a function, onloading a variable
    car2_imgTag.src = car2_img; // load image
}

function uploadBackground(){
    ctx.drawimage(background_imageTag, 0, 0, canwas_height, canvas_height);
}

function uploadcar1(){
    ctx.drawimage(car1_imgTag, car1_x, car1_y, car1_height, car1_width);
}

function uploadcar2(){
    ctx.drawimage(car2_imgTag, car2_x, car2_y, car2_height, car2_width);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') 
    {
        car1_up();
        console.log("up arrow key");
    }
    if (keyPressed == '40') 
    {
        car1_down();
        console.log("down arrow key");
    }
    if (keyPressed == '37') 
    {
        car1_left();
        console.log("left arrow key");
    }
    if (keyPressed == '39') 
    {
        car1_up();
        console.log("right arrow key");
    }
    if (keyPressed == '87') 
    {
        car2_up();
        console.log("key w");
    }
    if (keyPressed == '65') 
    {
        car2_left();
        console.log("key a");
    }
    if (keyPressed == '83') 
    {
        car2_down();
        console.log("key s");
    }
    if (keyPressed == '68') 
    {
        car2_right();
        console.log("key w");
    }
}

function car1_up()
{
    if (car1_y > 0){
        car1_y = car1_y - 10;
        console.log("When up arrow key is pressed, x = " + car1_x + "y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down()
{
    if (car1_y < 600){
        car1_y = car1_y + 10;
        console.log("When up down key is pressed, x = " + car1_x + "y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left()
{
    if (car1_x > 0){
        car1_x = car1_x + 10;
        console.log("When up left key is pressed, x = " + car1_x + "y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right()
{
    if (car1_x < 800){
        car1_x = car1_x - 10;
        console.log("When up right key is pressed, x = " + car1_x + "y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up()
{
    if (car2_y > 0){
        car2_y = car2_y - 10;
        console.log("When up w key is pressed, x = " + car2_x + "y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down()
{
    if (car2_y < 600){
        car2_y = car2_y + 10;
        console.log("When up s key is pressed, x = " + car2_x + "y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left()
{
    if (car2_x > 0){
        car2_x = car2_x - 10;
        console.log("When up a key is pressed, x = " + car2_x + "y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right()
{
    if (car2_x < 800){
        car2_x = car2_x + 10;
        console.log("When up a key is pressed, x = " + car2_x + "y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}