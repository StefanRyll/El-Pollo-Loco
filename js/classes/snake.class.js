class Snake extends MovableObject {

    y = 320;
    height = 200;
    width = 180;
    IMAGES_WALKING = [
        'img/11_enemies_snake/Walk1.png',
        'img/11_enemies_snake/Walk2.png',
        'img/11_enemies_snake/Walk3.png',
        'img/11_enemies_snake/Walk4.png'
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
            this.moveLeftSnake();
        }, 1000 / 60);

        setInterval(() => {
            this.playSnakeAnimation();
        }, 200);
    }

    moveLeftSnake() {
        this.moveLeft();
        this.otherDirection = true;
    }

    playSnakeAnimation() {
        this.playAnimation(this.IMAGES_WALKING);
    }
}