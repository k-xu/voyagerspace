var song, analyzer;
var img; 


var soundFile;
var fft;
var filter, filterFreq, filterRes;

function preload() {
    soundFormats('mp3', 'ogg');
    soundFile = loadSound("Planetary Sounds - Complete.mp3");
    
    //Images
    imgCrop1 = loadImage("Image Crops - Space/static01.png");
    imgCrop2 = loadImage("Image Crops - Space/static02.png");
    imgCrop3 = loadImage("Image Crops - Space/static03.png");
    imgCrop4 = loadImage("Image Crops - Space/static 04.png");
    imgCrop5 = loadImage("Image Crops - Space/static 05.png");
    imgCrop6 = loadImage("Image Crops - Space/static 06.png");
    imgCrop7 = loadImage("Image Crops - Space/static 7.png");
    imgCrop8 = loadImage("Image Crops - Space/static 8.png");
    imgCrop9 = loadImage("Image Crops - Space/static 9.png");
    imgCrop10 = loadImage("Image Crops - Space/static 10.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
     noCursor();
    
     imageMode(CENTER);
     textAlign(CENTER);
    
    
    soundFile.loop();
    
    //Amplitude Analyzer
    analyzer = new p5.Amplitude();
    
    //Volume analyzer input
    analyzer.setInput(song);
    frameRate(120);
    
    
    //filter
     filter = new p5.LowPass();
    soundFile.disconnect();
    soundFile.connect(filter);
    
    fft = new p5.FFT();
}


function draw() {

    var vol = analyzer.getLevel();
    
    
    if (mouseIsPressed)
        ellipseAnalyzerWhite(vol, mouseX, mouseY);
    else
        ellipseAnalyzerWhite(vol, mouseX, mouseY);
    
}


//KEY PRESS TRANSITION 01
function keyTyped() {
  if (key === '1') {
      soundFile.jump(0);
  }
    
    if (key ==='2') {
      soundFile.jump(42);
  } 
    if (key ==='3') {
      soundFile.jump(75);
  }
    if (key ==='4') {
        soundFile.jump(88);
    } 
    if (key === '5') {
        soundFile.jump(163);
    }
    if (key ==='6') {
        soundFile.jump(261);
    }
    if (key ==='7') {
        soundFile.jump(322);
    }
    if (key==='8') {
        soundFile.jump(404);
    }
    if (key==='9') {
        soundFile.jump(451);
    }
    if (key==='0') {
        soundFile.jump(500);
    }
    
    return false;
}


//White Ellipse Analyzer Machine
function ellipseAnalyzerWhite(soundVolume, posX, posY) {
    
 
    
    background(0);
     
    
    if (soundFile.currentTime() > 564){
         soundFile.jump(0);
    }

    
    //center frame extrapolate
    noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*10);
    rect(windowWidth/2-250, windowHeight/2-250, 500+soundVolume, 500+soundVolume); 
    
    noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*12);
    rect(windowWidth/2-300, windowHeight/2-300, 600+soundVolume*0, 600+soundVolume*0); 
    
    noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*14);
    rect(windowWidth/2-350, windowHeight/2-350, 700+soundVolume, 700+soundVolume); 
    
    
    noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*16);
    rect(windowWidth/2-400, windowHeight/2-400, 800+soundVolume, 800+soundVolume); 
    
     noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*18);
    rect(windowWidth/2-450, windowHeight/2-450, 900+soundVolume, 900+soundVolume); 
    
      noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*20);
    rect(windowWidth/2-500, windowHeight/2-500, 1000+soundVolume, 1000+soundVolume); 
    
    noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*22);
    rect(windowWidth/2-550, windowHeight/2-550, 1100+soundVolume, 1100+soundVolume); 
    
    noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*24);
    rect(windowWidth/2-600, windowHeight/2-600, 1200+soundVolume, 1200+soundVolume); 
    
    noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*26);
    rect(windowWidth/2-650, windowHeight/2-650, 1300+soundVolume, 1300+soundVolume); 
    
    noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*28);
    rect(windowWidth/2-700, windowHeight/2-700, 1400+soundVolume, 1400+soundVolume);
    
    
    //added frame
  
    noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*30);
    rect(windowWidth/2-750, windowHeight/2-750, 1500+soundVolume, 1500+soundVolume);
   
    
    
    
    
     if (soundFile.currentTime() > 0 && soundFile.currentTime() < 42) {
    
    //Crop 1
      imageMode(CENTER);
    image(imgCrop1, windowWidth/2, windowHeight/2, 10+soundVolume*1000-mouseX, 10+soundVolume*1000-mouseY);
   
    
    //center frame
    noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*10);
    rect(windowWidth/2-200, windowHeight/2-200, 400+soundVolume, 400+soundVolume); 
    
    //text    
  fill(255);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text('01:', width/2, height/2-220);
  text('The Sun', width/2, height/2+230);
 }
    
     
    
//song part transitions 02
        
 if (soundFile.currentTime() > 42 && soundFile.currentTime() < 75) {    

      //Crop 2
     imageMode(CENTER);
    image(imgCrop2, windowWidth/2, windowHeight/2, 10+soundVolume*1000-mouseX, 10+soundVolume*1000-mouseY);
     
       //center frame
         noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*10);
    rect(windowWidth/2-200, windowHeight/2-200, 400+soundVolume, 400+soundVolume);    
     
        //text    
   fill(255);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text('02:', width/2, height/2-220);
  text('Mercury', width/2, height/2+230);
    }

    
    //song part transitions 03
        
 if (soundFile.currentTime() > 75 && soundFile.currentTime() < 88){    

      //Crop 3
      imageMode(CENTER);
    image(imgCrop3, windowWidth/2, windowHeight/2, 10+soundVolume*1000-mouseX, 10+soundVolume*1000-mouseY);
 
       //center frame
           noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*10);
    rect(windowWidth/2-200, windowHeight/2-200, 400+soundVolume, 400+soundVolume); 
     
            //text    
  fill(255);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text('03:', width/2, height/2-220);
  text('Venus', width/2, height/2+230);
           }
    
    
    
//song part transitions 04
        
 if (soundFile.currentTime() > 88 && soundFile.currentTime() < 163){    

      //Crop 4
        imageMode(CENTER);
    image(imgCrop4, windowWidth/2, windowHeight/2, 10+soundVolume*1000-mouseX, 10+soundVolume*1000-mouseY);
     
       //center frame
           noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*10);
    rect(windowWidth/2-200, windowHeight/2-200, 400+soundVolume, 400+soundVolume); 
     
            //text    
  fill(255);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text('04:', width/2, height/2-220);
  text('Earth', width/2, height/2+230);
           }
    
    
    //song part transitions 05
        
 if (soundFile.currentTime() > 163 && soundFile.currentTime() < 261){    

      //Crop 4
        imageMode(CENTER);
    image(imgCrop5, windowWidth/2, windowHeight/2, 10+soundVolume*1000-mouseX, 10+soundVolume*1000-mouseY);
 
       //center frame
           noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*10);
    rect(windowWidth/2-200, windowHeight/2-200, 400+soundVolume, 400+soundVolume); 
     
            //text    
  fill(255);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text('05:', width/2, height/2-220);
  text('Mars', width/2, height/2+230);
           }
    
    
       //song part transitions 06
        
 if (soundFile.currentTime() > 261 && soundFile.currentTime() < 322){    

      //Crop 4
        imageMode(CENTER);
    image(imgCrop6, windowWidth/2, windowHeight/2, 10+soundVolume*1000-mouseX, 10+soundVolume*1000-mouseY);
 
       //center frame
           noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*10);
    rect(windowWidth/2-200, windowHeight/2-200, 400+soundVolume, 400+soundVolume); 
     
            //text    
  fill(255);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text('06:', width/2, height/2-220);
  text('Jupiter', width/2, height/2+230);
           }
    
    
           //song part transitions 07
        
 if (soundFile.currentTime() > 322 && soundFile.currentTime() < 404){    

      //Crop 4
       imageMode(CENTER);
    image(imgCrop7, windowWidth/2, windowHeight/2, 10+soundVolume*1000-mouseX, 10+soundVolume*1000-mouseY);
       
     //center frame
           noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*10);
    rect(windowWidth/2-200, windowHeight/2-200, 400+soundVolume, 400+soundVolume); 
     
            //text    
  fill(255);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text('07:', width/2, height/2-220);
  text('Saturn', width/2, height/2+230);
           }
    
    
      //song part transitions 08
        
 if (soundFile.currentTime() > 404 && soundFile.currentTime() < 451){    

      //Crop 4
       imageMode(CENTER);
    image(imgCrop8, windowWidth/2, windowHeight/2, 10+soundVolume*1000-mouseX, 10+soundVolume*1000-mouseY);
       
     //center frame
           noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*10);
    rect(windowWidth/2-200, windowHeight/2-200, 400+soundVolume, 400+soundVolume); 
     
            //text    
  fill(255);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text('08:', width/2, height/2-220);
  text('Uranus', width/2, height/2+230);
           }
    
    
     //song part transitions 09
        
 if (soundFile.currentTime() > 451 && soundFile.currentTime() < 500){    

      //Crop 4
       imageMode(CENTER);
    image(imgCrop9, windowWidth/2, windowHeight/2, 10+soundVolume*1000-mouseX, 10+soundVolume*1000-mouseY);
       
     //center frame
           noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*10);
    rect(windowWidth/2-200, windowHeight/2-200, 400+soundVolume, 400+soundVolume); 
     
            //text    
  fill(255);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text('09:', width/2, height/2-220);
  text('Neptune', width/2, height/2+230);
           }
    

    
 //song part transitions 10
        
 if (soundFile.currentTime() > 500 && soundFile.currentTime() < 564){    

      //Crop 4
       imageMode(CENTER);
    image(imgCrop10, windowWidth/2, windowHeight/2, 10+soundVolume*1000-mouseX, 10+soundVolume*1000-mouseY);
       
     //center frame
           noFill();
    stroke(255);
    strokeWeight(0.3*soundVolume*10);
    rect(windowWidth/2-200, windowHeight/2-200, 400+soundVolume, 400+soundVolume); 
     
            //text    
  fill(255);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text('10:', width/2, height/2-220);
  text('Pluto', width/2, height/2+230);
           }
        

    
         //Restart
        
 if (soundFile.currentTime() > 564){
     soundFile.stop;
           }
    
    
    
    //BORDERS: INSTRUCTION TEXT
    fill(255);
    noStroke();
    textSize(12);
    
    textAlign(LEFT);
    text('The Voyager: Sounds received from Space', 50, 50);
     text('Move cursor to regulate frequency', 50, windowHeight-50);
    
    textAlign(RIGHT);
    text('Cmd+R to reload audio system', windowWidth-50, 50);
    text('Press keys 1-0 to switch and layer sounds', windowWidth-50, windowHeight-50);
    
//-----------------
    
    
    //filter
    filterFreq = map (mouseX, 0, width, 10, 22050);
    filterRes = map(mouseY, 0, height, 15, 5);
    filter.set(filterFreq, filterRes);

}

    
//resize

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}