lwxc= "";
lwyc= "";
rwxc= "";
rwyc= "";

function setup() {
 canvas= createCanvas(500,400);
 canvas.center();
 video= createCapture(VIDEO); 
 video.hide();  

 poseNet= ml5.poseNet(video, modelLoaded);
 poseNet.on("pose", gotPoses);
}

function draw(){
image(video, 0, 0, 500, 400);
}

function modelLoaded() {
    console.log("Model is initialised!!!!");
}

function gotPoses(results) {
    if (results.length>0) {
       lwxc= results[0].pose.leftWrist.x;
       lwyc= results[0].pose.leftWrist.y;
       rwxc= results[0].pose.rightWrist.x;
       rwyc= results[0].pose.rightWrist.y;
       
       console.log("The x-coordinate of the left wrist is "+lwxc+", and the y-coordinate is "+lwyc);
       console.log("The x-coordinate of the right wrist is "+rwxc+", and the y-coordinate is "+rwyc);
    }
}