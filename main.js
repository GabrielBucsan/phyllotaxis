$(document).ready(()=>{

    const canvas = new Canvas(600, 600);
    const c = canvas.context;
    const pointsSlider = $('#pointsRange');
    const coeficientSlider = $('#coeficientRange');
    const angleSlider = $('#angleRange');
    const pointRadiusSlider = $('#pointRadiusRange');

    let points = [];

    $('#pointsRange').on('input', function () {
        calculatePoints();
    });
    $('#coeficientRange').on('input', function () {
        calculatePoints();
    });
    $('#angleRange').on('input', function () {
        calculatePoints();
    });
    $('#pointRadiusRange').on('input', function () {
        calculatePoints();
    });

    let calculatePoints = function(){
        let numPoints = Number(pointsSlider[0].value);
        let coeficient = Number(coeficientSlider[0].value);
        let baseAngle = Number(angleSlider[0].value);
        let pointRadius = Number(pointRadiusSlider[0].value);
        points = [];

        for (let i = 1; i <= numPoints; i++) {
            let radians = baseAngle * i * Math.PI / 180;
            let pos = new Vector(Math.cos(radians), Math.sin(radians));
            pos.multiplyVector(coeficient * Math.sqrt(i));
            pos.add(new Vector(canvas.size.x / 2, canvas.size.y / 2));
            points.push(new Point(c, pos, pointRadius));
        }

        requestAnimationFrame(animate);
    }

    // MAIN FUNCTION
    let animate = function(){
        canvas.update();

        for (let i = 0; i < points.length; i++) {
            points[i].render();            
        }
    };

    calculatePoints();
});