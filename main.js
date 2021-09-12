function setup(){
video = createCapture(VIDEO);
video.size(500,500);

canvas = createCanvas(550,550);
canvas.position(500,100);

poseNet = ml5.poseNet(video, modelloaded);
poseNet.on("pose", gotPoses);
}
function draw() {
    background('#11ff00');
}
function modelloaded() {
    console.log("poseNet is initialized");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}