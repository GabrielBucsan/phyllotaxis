$(document).ready(()=>{

    const canvas = new Canvas(600, 600);
    const c = canvas.context;
    const pointsSlider = $('#pointsRange');
    const coeficientSlider = $('#coeficientRange');
    const angleSlider = $('#angleRange');
    const pointRadiusSlider = $('#pointRadiusRange');
    const colorPointSlider = $('#colorPointRange');
    const pointsColorPicker = $('#pointsColor');
    const colorOffsetSlider = $('#colorOffsetRange');

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
    $('#colorPointRange').on('input', function () {
        calculatePoints();
    });
    $('#pointsColor').on('input', function () {
        calculatePoints();
    });
    $('#colorOffsetRange').on('input', function () {
        calculatePoints();
    });

    let calculatePoints = function(){
        let numPoints = Number(pointsSlider[0].value);
        let coeficient = Number(coeficientSlider[0].value);
        let baseAngle = Number(angleSlider[0].value);
        let pointRadius = Number(pointRadiusSlider[0].value);
        let colorPoint = Number(colorPointSlider[0].value);
        let pointsColor = pointsColorPicker[0].value;
        let colorOffset = Number(colorOffsetSlider[0].value);
        points = [];

        for (let i = 1; i <= numPoints; i++) {
            let radians = baseAngle * i * Math.PI / 180;
            let pos = new Vector(Math.cos(radians), Math.sin(radians));
            let hasColor = (i + colorOffset) % colorPoint == 0;
            pos.multiplyVector(coeficient * Math.sqrt(i));
            pos.add(new Vector(canvas.size.x / 2, canvas.size.y / 2));
            points.push(new Point(c, pos, pointRadius, hasColor, pointsColor));
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