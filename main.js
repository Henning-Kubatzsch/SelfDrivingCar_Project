const canvas = document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width *  0.9);
const car= new Car(road.getLaneCenter(1),100,30,50);
//const sensor = new Sensor(car);


animate();

function animate(){

    car.update();
    //sensor.update();

    canvas.height=window.innerHeight;

    ctx.save();
    //ctx.translate(0, -car.y + canvas.height*0.7);
    
    road.draw(ctx);
    car.draw(ctx);
    //sensor.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}