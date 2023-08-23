song="";
leftWrist_x=0;
rightWrist_x=0;
leftWrist_y=0;
rightWrist_y=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);

}

function modelLoaded(){
    console.log("poseNet model is initialized");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);

        rightWrist_x=results[0].pose.rightWrist.x;
        rightWrist_y=results[0].pose.rightWrist.y;
        console.log("rightWrist_x= "+rightWrist_x+" ,rightWrist_y= "+rightWrist_y);

        leftWrist_x=results[0].pose.leftWrist.x;
        leftWrist_y=results[0].pose.leftWrist.y;
        console.log("leftWrist_x= "+leftWrist_x+" ,leftWrist_y= "+leftWrist_y);
    }
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song=loadSound("music.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}