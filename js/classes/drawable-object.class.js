class DrawableObject {

    x;
    y;
    img;
    imageCache = {};
    currentImage = 0;
    width;
    height;

    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image'); <img id='image'>
        this.img.src = path;
    }

    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn('Error loading image', e);
        }
    }

    /**
     * 
     * @param {array} arr - ['img/image1.png', 'img/image2.png' ... ]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }

    drawBorder(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof EndBoss || this instanceof Bird || this instanceof Snake) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

}