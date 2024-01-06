class Bird extends MovableObject {

    height = 100;
    width = 150;
    IMAGES_WALKING = [
        'img/10_enemies_birds/bird_flight/Flight1.png',
        'img/10_enemies_birds/bird_flight/Flight2.png',
        'img/10_enemies_birds/bird_flight/Flight3.png',
        'img/10_enemies_birds/bird_flight/Flight4.png',
        'img/10_enemies_birds/bird_flight/Flight5.png',
        'img/10_enemies_birds/bird_flight/Flight6.png'
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.y = 50 + Math.random() * 300;
        this.x = 300 + Math.random() * this.total_x;
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.5 + Math.random() * 2.5;
        this.animate();
        this.moveLeft();
    }

    animate() {
        setInterval(() => {
            this.moveLeftBird();
        }, 1000 / 60);

        setInterval(() => {
            this.playChickenBird();
        }, 200);
    }

    moveLeftBird() {
        this.moveLeft();
        this.otherDirection = true;
    }

    playChickenBird() {
        this.playAnimation(this.IMAGES_WALKING);
    }
}