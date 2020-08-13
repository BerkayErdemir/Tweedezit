"use strict";

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray = [];

//muis

const muis = {

    x: null,
    y: null,
    radius: 550
};

window.addEventListener('mousemove', function (event) {

    muis.x = event.x;
    muis.y = event.y;
    //console.log(muis.x, muis.y);



});

ctx.fillStyle = 'white';
ctx.font = '30px Verdana';



class Particle {

    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.size = 10;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30 + 1);

    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

    }


    update() {


        let dx = muis.x - this.x;
        let dy = muis.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = muis.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if (distance < muis.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {

                let dx = this.x - this.baseX;
                this.x -= dx / 10;
            }
            if (this.y !== this.baseY) {

                let dy = this.y - this.baseY;
                this.y -= dy / 10;
            }



        }

    }

}