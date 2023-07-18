class Paddle {
    constructor(x, y, l, w) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.w = w;
        this.c = c;
    }

    draw() {
        ctx.strokeStyle = "black";
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.l);
        ctx.strokeRect(this.x, this.y, this.w, this.l);
    }
}