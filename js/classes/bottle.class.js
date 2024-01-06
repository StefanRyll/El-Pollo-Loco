class Bottle extends MovableObject {
    width = 70;
    height = 90;
    y = 380;
    // offset = {
    //     left: 20,
    //     right: 8,
    //     top: 15,
    //     bottom: 8
    // }

    constructor() {
        super().loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.x = 400 + Math.random() * 2700;
    }
}