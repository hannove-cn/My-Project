// trail.js
const trail = document.getElementById('magicTrail');
const dots = [];
const trailLength = 30;

for(let i = 0; i < trailLength; i++){
    const span = document.createElement('span');
    trail.appendChild(span);
    dots.push({
        el: span,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    });
}

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateTrail(){
    dots.forEach((dot, index) => {
        let targetX, targetY;
        if(index === 0){
            targetX = mouseX;
            targetY = mouseY;
        }else{
            targetX = dots[index - 1].x;
            targetY = dots[index - 1].y;
        }
        dot.x += (targetX - dot.x) * 0.35;
        dot.y += (targetY - dot.y) * 0.35;
        dot.el.style.left = dot.x + 'px';
        dot.el.style.top = dot.y + 'px';
        const opacity = 1 - index / trailLength;
        dot.el.style.opacity = opacity;
        const scale = 1 - index / trailLength * 0.5;
        dot.el.style.transform = `translate(-50%,-50%) scale(${scale})`;
    });
    requestAnimationFrame(animateTrail);
}
animateTrail();
