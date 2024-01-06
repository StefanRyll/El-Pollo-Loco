class Chicken extends MovableObject {

    y = 380;
    height = 80;
    width = 70;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = 300 + Math.random() * this.total_x;
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.3 + Math.random() * 0.3;
        this.animate();
        this.moveLeft();
    }

    animate() {
        setInterval(() => {
            this.moveLeftChicken();
        }, 1000 / 60);

        setInterval(() => {
            this.playChickenAnimation();
        }, 200);
    }

    moveLeftChicken() {
        this.moveLeft();
    }

    playChickenAnimation() {
        this.playAnimation(this.IMAGES_WALKING);
    }
}