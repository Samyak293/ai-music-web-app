song1="";
song2="";
song1_status="";
song2_status="";
scoreRightwrist=0;
scoreLefttwrist=0;
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;
function preload(){
    song1=loadSound("Harmane.mp3");
    song2=loadSound("palika dum dum.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log('posenet is ready');
}
function gotPoses(results){
    if(results.length>0){
     console.log(results);
     leftWristx=results[0].pose.leftWrist.x;
     leftWristy=results[0].pose.leftWrist.y;
     console.log("left wrist x="+leftWristx+"left wrist y="+leftWristy);
     rightWristx=results[0].pose.rightWrist.x;
     rightWristy=results[0].pose.rightWrist.y;
     console.log("right wrist x="+rightWristx+"right wrist y="+rightWristy);
    }
}