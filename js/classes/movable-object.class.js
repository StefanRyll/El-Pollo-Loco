class MovableObject extends DrawableObject {

    total_x = 3300;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    collectedBottles = 0;
    collectedCoins = 0;
    offset = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 220;
    }



    // isColliding(mo) {
    //     return this.x + this.width > mo.x &&
    //         this.y + this.height > mo.y &&
    //         this.x < mo.x &&
    //         this.y < mo.y + mo.height
    // }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // It gives the count of milliseconds since January 1, 1970, and is used to get the current time in JavaScript.
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // difference in millisec.
        timepassed = timepassed / 1000; // difference in sec
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }

    // isColliding(mo) {
    //     return (this.x + this.width) >= mo.x && this.x <= (mo.x + mo.width) &&
    //         (this.x + this.offsetY + this.height) >= mo.x &&
    //         (this.x + this.offsetY) <= (mo.x + mo.height) &&
    //         mo.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    // }

    isColliding(obj) {
        return (this.x + this.width) - this.offset.right > obj.x + obj.offset.left &&
            (this.y + this.height) - this.offset.bottom > obj.y + obj.offset.top &&
            this.x + this.offset.left < obj.x + obj.width + obj.offset.right &&
            this.y + this.offset.top < obj.y + obj.height + obj.offset.bottom;
    }

    // isColliding(mo) {
    //     return this.isCollidingLeft(mo) && this.isCollidingTop(mo) && this.isCollidingRight(mo) && this.isCollidingBottom(mo);
    // }


    // isCollidingLeft(mo) {
    //     return this.x + this.width - this.offset.right > mo.x + mo.offset.left;
    // }


    // isCollidingTop(mo) {
    //     return this.y + this.height - this.offset.bottom > mo.y + mo.offset.top;
    // }


    // isCollidingRight(mo) {
    //     return this.x + this.offset.left < mo.x + mo.width - mo.offset.right;
    // }


    // isCollidingBottom(mo) {
    //     return this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    // }

}