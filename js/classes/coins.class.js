class Coin extends MovableObject {
    width = 75;
    height = 75;
    // offset = {
    //     left: 12,
    //     right: 15,
    //     top: 18,
    //     bottom: 12
    // }

    constructor() {
        super().loadImage('img/7_statusbars/3_icons/icon_coin.png');
        this.x = 550 + Math.random() * 2700;
        this.y = 100 + Math.random() * 200;
    }
}