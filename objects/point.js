class Point{
    constructor(c, pos, pointRadius){
        this.c = c;
        this.pos = pos;
        this.pointRadius = pointRadius;
    }

    // renders the point on the canvas
    render(){
        // render point
        this.c.beginPath();
        this.c.arc(this.pos.x, this.pos.y, this.pointRadius, 0, Math.PI * 2);
        this.c.fillStyle = 'white';
        this.c.closePath();
        this.c.fill();
    }
}