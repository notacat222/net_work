function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  
   //1>2
  stroke (255)
  strokeWeight (3)
  line(windowWidth/2, windowHeight/7, windowWidth/3, windowHeight/3)
  
  //2>3
  stroke (255)
  line(windowWidth/3, windowHeight/3, windowWidth/2, windowHeight/3)
  
  //3>4
  stroke (255)
  line(windowWidth/2, windowHeight/3, windowWidth/1.5, windowHeight/3)
  
  //4>5
  stroke (255)
  line(windowWidth/1.5, windowHeight/3, windowWidth/2, windowHeight/2)
  
   //5>7
  stroke (255)
  line(windowWidth/2, windowHeight/2, windowWidth/1.5, windowHeight/1.5)
  
  //5>6
  stroke (255)
  line(windowWidth/2, windowHeight/2, windowWidth/3, windowHeight/1.5)
  
   //2>6
  stroke (255)
  line(windowWidth/3, windowHeight/3, windowWidth/3, windowHeight/1.5)
  
   //4>7
  stroke (255)
  line(windowWidth/1.5, windowHeight/3, windowWidth/1.5,  windowHeight/1.5)
  
    //2>5
  stroke (255)
  line(windowWidth/3, windowHeight/3, windowWidth/2, windowHeight/2)
  
  //1>5
  stroke (255)
  line(windowWidth/2, windowHeight/7, windowWidth/2, windowHeight/2)
  
   //1>6
  stroke (255)
  line(windowWidth/2, windowHeight/7, windowWidth/3, windowHeight/1.5)
  
   //1>7
  stroke (255)
  line(windowWidth/2, windowHeight/7, windowWidth/1.5,  windowHeight/1.5)
  
   //1>4
  stroke (255)
  line(windowWidth/2, windowHeight/7, windowWidth/1.5,  windowHeight/3)
  
  
  //1
  fill (0,0,255)
  let circle1 = circle(windowWidth/2, windowHeight/7, 70);
  let a = createA('https://kilianhoppner.github.io/surveillancecore-pt.1/', ' ', '_blank');
  a.addClass('circle-button');
  a.position(windowWidth/2 - 35, windowHeight/7 - 35, 70);
  
 //2
   fill (0,255,0)
    let circle2 = circle(windowWidth/3, windowHeight/3, 70);
  let f = createA('https://notacat222.github.io/net_work/tree/index.html', ' ', '_blank');
  f.addClass('circle-button');
  f.position(windowWidth/3 - 35, windowHeight/3 - 35, 70);
  
  //3
  fill (255,0,0)
   let circle3 = circle(windowWidth/2, windowHeight/3, 70);
  let e = createA('https://notacat222.github.io/net_work/equationtomuic/index.html', ' ', '_blank');
  e.addClass('circle-button');
  e.position(windowWidth/2 - 35, windowHeight/3 - 35, 70);
  
  //4
   fill(0,255,0)
 let circle4= circle(windowWidth/1.5, windowHeight/3, 70);
  let g = createA('https://notacat222.github.io/net_work/particles/index.html', ' ', '_blank');
  g.addClass('circle-button');
  g.position(windowWidth/1.5 - 35, windowHeight/3 - 35, 70);
  
  //5
   fill (0,0,255)
    let circle5 = circle(windowWidth/2, windowHeight/2, 70);
  let b = createA('https://notacat222.github.io/net_work/mictrail/index.html', ' ', '_blank');
  b.addClass('circle-button');
  b.position(windowWidth/2 - 35, windowHeight/2 - 35, 70);
  
  //7
     fill (255,255,0)
    let circle7 = circle(windowWidth/1.5, windowHeight/1.5, 70);
  let d = createA('https://notacat222.github.io/net_work/IMworkingfile/index.html', ' ', '_blank');
  d.addClass('circle-button');
  d.position(windowWidth/1.5 - 35, windowHeight/1.5 - 35, 70);
  
  //6
   fill (0,0,255)
      let circle6 = circle(windowWidth/3, windowHeight/1.5, 70);
  let c = createA('https://notacat222.github.io/net_work/birds3/index.html', ' ', '_blank');
  c.addClass('circle-button');
  c.position(windowWidth/3 - 35, windowHeight/1.5 - 35, 70);
  
   textFont("arial");
textSize(20);
  noStroke()
   fill('blue');
   text('BLUE- Frontal Lobe. Voluntary Movement, Expressive Language, Personality ', 50, 60);
     fill('green');
 text('GREEN- Occiptical Lobe. Recognising shapes and colours, processing information.', 50, 80);
   fill('red');
 text('RED- Temporal Lobe. Auditory information. ', 50, 100);
   fill('yellow');
 text('YELLOW- Parietal Lobe. Perception and intergration.', 50, 120);
   fill(255);
   textSize(40);
 text('CLICK EACH CIRCLE.', windowWidth/1.5, windowHeight/1.2);
 
  
}
  
function draw() {

  
  
}
