let bgArray = [];
let levelLength = 7;
let firstBg = true;
let pos_x = -719;

function bgImgLoop() {
    for (let i = 0; i < levelLength; i++) {
        if (firstBg) {
            bgArray.push(new BackgroundObject('img/5_background/layers/air.png', pos_x));
            bgArray.push(new BackgroundObject('img/5_background/layers/3_third_layer/2.png', pos_x));
            bgArray.push(new BackgroundObject('img/5_background/layers/2_second_layer/2.png', pos_x));
            bgArray.push(new BackgroundObject('img/5_background/layers/1_first_layer/2.png', pos_x));
            firstBg = false;
        } else {
            bgArray.push(new BackgroundObject('img/5_background/layers/air.png', pos_x));
            bgArray.push(new BackgroundObject('img/5_background/layers/3_third_layer/1.png', pos_x));
            bgArray.push(new BackgroundObject('img/5_background/layers/2_second_layer/1.png', pos_x));
            bgArray.push(new BackgroundObject('img/5_background/layers/1_first_layer/1.png', pos_x));
            firstBg = true;
        }
        pos_x += 719;
    }
    return bgArray;
}

const level1 = new Level(
    [
        new Bird(),
        new Bird(),
        new Bird(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Snake(),
        new Snake(),
        new Snake(),
        new EndBoss(),
    ], [
        new Cloud(0),
        new Cloud(500),
        new Cloud(1100),
        new Cloud(1600),
        new Cloud(2300),
        new Cloud(2800),
        new Cloud(3300)
    ], [
        bgImgLoop()
    ], [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle()
    ], [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ]
);