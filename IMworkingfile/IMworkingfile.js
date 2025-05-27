//coded with promting help from chat GPT as well as https://www.youtube.com/watch?v=bPD8lL0hiLs

let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();  // Hides the video feed

  // Initialize PoseNet
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', function(results) {
    poses = results;
  });
}

function modelLoaded() {
  console.log('PoseNet model loaded!');
}

function draw() {
  // Apply threshold effect to the background
  applyThresholdEffect();
  
  // Set the background to black
  background(0);

  // Draw the Lissajous curve based on body movements
  drawLissajousCurve();
}

function applyThresholdEffect() {
  // Convert the video to grayscale and apply threshold
  video.loadPixels();
  
  for (let i = 0; i < video.pixels.length; i += 4) {
    let r = video.pixels[i];
    let g = video.pixels[i + 1];
    let b = video.pixels[i + 2];

    // Convert to grayscale
    let brightness = (r + g + b) / 3;
    
    // Apply threshold effect
    let threshold = 100; // Adjust the threshold value as needed
    let colorValue = brightness > threshold ? 255 : 0;
    
    video.pixels[i] = colorValue;      // Red channel
    video.pixels[i + 1] = colorValue;  // Green channel
    video.pixels[i + 2] = colorValue;  // Blue channel
  }
  
  // Update the canvas with the new pixel data
  video.updatePixels();
  
  // We don't draw the video itself, we just apply the threshold to pixels
}

function drawLissajousCurve() {
  if (poses.length > 0) {
    let pose = poses[0].pose;

    // Track the key body parts for Lissajous curve: hands
    let leftWrist = pose.keypoints.find(kp => kp.part === 'leftWrist');
    let rightWrist = pose.keypoints.find(kp => kp.part === 'rightWrist');

    if (leftWrist && rightWrist) {
      // Calculate the distance between the wrists to control amplitude
      let handDist = dist(leftWrist.position.x, leftWrist.position.y, rightWrist.position.x, rightWrist.position.y);
      let A = map(handDist, 50, 200, 50, 200);  // Amplitude based on hand distance

      // Calculate the wrist angle to control frequency
      let angle = atan2(rightWrist.position.y - leftWrist.position.y, rightWrist.position.x - leftWrist.position.x);
      let b = map(angle, -PI, PI, 1, 5);  // Frequency based on wrist angle

      // Set phase shift based on the x position of the nose
      let delta = map(pose.keypoints.find(kp => kp.part === 'nose').position.x, 0, width, 0, TWO_PI);

      // Lissajous curve equation
      stroke(255, 0, 0); // Set stroke color to red
      strokeWeight(3);   // Thinner stroke for the second equation
      noFill();
      
      // Draw the Lissajous curve
      beginShape();
      for (let t = 0; t < TWO_PI; t += 0.01) {
        let x = A * sin(3 * t + delta);  // Lissajous curve x(t)
        let y = A * sin(2 * t);          // Lissajous curve y(t)
        
        // Apply the calculated amplitude
        vertex(width / 2 + x, height / 2 + y); // Draw centered in the canvas
      }
      endShape();
    }
  }
}
