nosex = 0
nosey = 0 
difference = 0
rightwristx = 0
leftwristx = 0

function setup(){

    video = createCapture(VIDEO)
    video.size(500, 500)
    video.position(200, 150)

    canvas = createCanvas(500, 500)
    canvas.position(850,150)

    pn = ml5.poseNet(video, modalload)
    pn.on("pose", gotresults)
}

function modalload(){

    console.log("this is a test")
    
}

function gotresults(r){

    if(r.length > 0){

        console.log(r)

        nosex = r[0].pose.nose.x
        nosey = r[0].pose.nose.y
        rightwristx = r[0].pose.rightWrist.x  
        leftwristx = r[0].pose.leftWrist.x
        difference = floor(leftwristx-rightwristx)
    }

}

function draw(){
    background("bisque")
    document.getElementById("sqsize").innerHTML = "Size of the text is " + difference +"px"
    textSize(difference)
    fill("red")
    stroke("black")
    text('MARVEL' , nosex, nosey)

}


