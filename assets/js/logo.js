/*--------------------
Setup
--------------------*/
const scale = window.devicePixelRatio;
const wrapper = document.querySelector('.gh-head-logo');
const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = 180;
const height = 112;

/*--------------------
  Render
  --------------------*/
const render = () => {
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(video, 0, 0, width, height);
  requestAnimationFrame(render);
};

/*--------------------
  Init
  --------------------*/
const init = () => {
  resize();
  render();
};

/*--------------------
  Preload Image
  --------------------*/
video.onload = init;

/*--------------------
Resize
--------------------*/
const resize = () => {
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);
  ctx.scale(scale, scale);
};
window.addEventListener('resize', init);

video.addEventListener('canplay', (event) => {
  init();
});

wrapper.addEventListener('click', (event) => {
  video.play();
});
