const html = document.documentElement;
const frameCount = 158
// the walkcycle image sequence
let walkcycle = new Array(frameCount);
// the index of the current walkcycle element to show
let frameToShow = 1;

function preload() {
  // load all the walk cycle images
  for(let i = 0; i<frameCount; i++){
    i <= 99 
    ?   walkcycle[i] = loadImage(`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/10-fall-into-case/${i.toString().padStart(4, '01')}.jpg`)
    :  walkcycle[i] = loadImage(`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/10-fall-into-case/${(i%100).toString().padStart(4, '02')}.jpg`);
  }
}

function setup() {
  createCanvas(1158, 770);
}

function draw() {
  background(0);
  (window.innerWidth > 767.98 ) ? image(walkcycle[frameToShow], 0, 0, 670, 750) : image(walkcycle[frameToShow], 0, 0, 1100, 670) 
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  frameToShow = Math.min( frameCount - 1, Math.ceil(scrollFraction * frameCount));
});



