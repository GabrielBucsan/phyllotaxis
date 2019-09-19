class Point{
    constructor(c, pos, pointRadius, hasColor, color){
        this.c = c;
        this.pos = pos;
        this.pointRadius = pointRadius;

        this.hasColor = hasColor;
        this.color = color;
    }

    // renders the point on the canvas
    render(){
        // render point
        this.c.save();
        this.c.beginPath();
        let radius = (this.hasColor)? this.pointRadius : this.pointRadius * 0.8;
        this.c.arc(this.pos.x, this.pos.y, radius, 0, Math.PI * 2);
        if(this.hasColor){
            this.c.globalAlpha = 1;
            this.c.fillStyle = this.color;
        }else{
            this.c.globalAlpha = 0.5;
            this.c.fillStyle = '#A6A6A6';
        }
        this.c.closePath();
        this.c.fill();
        this.c.restore();
    }
}