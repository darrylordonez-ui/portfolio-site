const image = document.querySelector('.moving-ball');
const container = document.querySelector('.redBorder');
const image2 = document.querySelector('.net');
const container2 = document.querySelector('.orangeBorder');
const container3 = document.querySelector('.emailBorder');
const header = document.querySelector('h3');
const black = document.querySelector('.darkBorder');
const white = document.querySelector('.whiteBorder');
let animationInterval;

white.addEventListener('mouseenter', () => {
	white.style.height = '15vh';
	white.style.transitionDuration = "1s";
});

white.addEventListener('mouseleave', () => {
	white.style.height = '12vh';
	white.style.transitionDuration = "1s";
});

container2.addEventListener('mouseenter', () => {
	startLoop2();
	animationInterval = setInterval(startLoop2, 900);
	image.style.opacity = "0.5";
	image2.style.opacity = "0.7";
	image2.style.transform = "rotate(-50deg)";
	image2.style.left = "60%";
	image2.style.width = "32%";
	image2.style.top = "14%";
	container2.style.fontSize = "40pt";
	container2.style.left = "86%";
	black.style.opacity = "0.8";
	white.style.height = '15vh';
	white.style.transitionDuration = "1s";
});

container2.addEventListener('mouseleave', () => {
	clearInterval(animationInterval);
	image.style.transform = ('translate(25%, 38%');
	image.style.opacity = "0.0";
	image2.style.opacity = "0.0";
	image2.style.transform = "rotate(0deg)";
	image2.style.left = "5%";
	image2.style.width = "37%";
	image2.style.top = "20%";
	container2.style.fontSize = "25pt";
	container2.style.left = "90%";
	black.style.opacity = "0.0";
	white.style.height = '12vh';
	white.style.transitionDuration = "1s";
});

container3.addEventListener('mouseenter', () => {
	startLoop3();
	animationInterval = setInterval(startLoop3, 900);
	image.style.opacity = "0.5";
	image2.style.opacity = "0.7";
	image2.style.transform = "rotate(65deg)";
	image2.style.left = "45%";
	image2.style.width = "10%";
	image2.style.top = "11%";
	header.style.fontSize = "40pt";
	container3.style.left = "30%";
	black.style.opacity = "0.8";
	white.style.height = '15vh';
	white.style.transitionDuration = "1s";
});

container3.addEventListener('mouseleave', () => {
	clearInterval(animationInterval);
	image.style.transform = ('translate(25%, 38%');
	image.style.opacity = "0.0";
	image2.style.opacity = "0.0";
	image2.style.transform = "rotate(0deg)";
	image2.style.left = "5%";
	image2.style.width = "37%";
	image2.style.top = "20%";
	header.style.fontSize = "25pt";
	container3.style.left = "40%";
	black.style.opacity = "0.0";
	white.style.height = '12vh';
	white.style.transitionDuration = "1s";
});

container.addEventListener('mouseenter', () => {
	startLoop();
	animationInterval = setInterval(startLoop, 1000);
	image.style.opacity = "0.5";
	image2.style.opacity = "0.7";
	container.style.fontSize = "40pt";
	black.style.opacity = "0.8";
	white.style.height = '15vh';
	white.style.transitionDuration = "1s";
});

container.addEventListener('mouseleave', () => {
	clearInterval(animationInterval);
	image.style.transform = ('translate(25%, 38%');
	image.style.opacity = "0.0";
	image2.style.opacity = "0.0";
	container.style.fontSize = "25pt";
	black.style.opacity = "0.0";
	white.style.height = '12vh';
	white.style.transitionDuration = "1s";
});

function startLoop() {
  image.style.transition = 'none';
  image.style.transform = 'translate(25%, 38%)';
  image.style.opacity = "0.0";
  image2.style.opacity = "0.0";

  void image.offsetHeight;

  image.style.transition = 'transform 1s linear';
  image.style.transform = 'translate(-130%, -200%)';
  image.style.opacity = "0.5";
  image2.style.opacity = "0.4";
}

function startLoop2() {
  image.style.transition = 'none';
  image.style.transform = 'translate(125%, 15%)';
  image.style.opacity = "0.0";
  image2.style.opacity = "0.0";

  void image.offsetHeight;

  image.style.transition = 'transform 1s linear';
  image.style.transform = 'translate(230%, -230%)';
  image.style.opacity = "0.5";
  image2.style.opacity = "0.4";
}

function startLoop3() {
  image.style.transition = 'none';
  image.style.transform = 'translate(75%, -20%)';
  image.style.opacity = "0.0";
  image2.style.opacity = "0.0";

  void image.offsetHeight;

  image.style.transition = 'transform 1s linear';
  image.style.transform = 'translate(75%, -250%)';
  image.style.opacity = "0.5";
  image2.style.opacity = "0.4";
}

