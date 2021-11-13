function setup(){
    video = createCapture(VIDEO)
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 550);
    poseNet = ml5.poseNet(video, modelLoaded);

}

function modelLoaded(){
    console.log('POSENET IS INITIALIZED');

}

function gotPoses(results)
{
if(results.length >0)
{
    console.log(results);

    leftWristx = results[0].pose.leftWrist.x;
    rightWristx = results[0].pose.rightWrist.x;
    diffrence =floor(leftWristX - rightWristX);
}
}

function draw(){
    background('#6C91C2');


    textSize(diffrence);
    fill('#FFE787');
    text('peter',50,400);
}
