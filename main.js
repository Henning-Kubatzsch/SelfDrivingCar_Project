const carCanvas = document.getElementById("carCanvas");
carCanvas.width=200;

const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width=300;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road = new Road(carCanvas.width/2, carCanvas.width *  0.9);
//const car= new Car(road.getLaneCenter(1),100,30,50, "AI");

const N = 1 ;
const cars = generateCars(N);
let bestCar = cars[0];

if(localStorage.getItem("bestBrain")){

    for(let i = 0; i < cars.length; i++){
        cars[i].brain = JSON.parse(
            localStorage.getItem("bestBrain")
        );
        if(i!=0){
            NeuralNetwork.mutate(cars[i].brain, 0.1);
        }
    }

    
    console.log("this is the best brain: " + bestCar.brain);
}

//let count = 0;

const traffic = [

    /*
    new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(0), -300, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(2), -300, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(3), -700, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(1), -900, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(2), -1100, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(0), -1300, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(2), -1500, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(1), -1700, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(2), -1900, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(0), -2100, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(1), -2100, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(2), -2300, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(1), -2300, 30, 50, "DUMMY", 2),
    */

    new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(0), -300, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(2), -350, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(3), -600, 30, 50, "DUMMY", 1.4),
    new Car(road.getLaneCenter(1), -800, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(2), -1000, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(0), -1200, 30, 50, "DUMMY", 2.5),
    new Car(road.getLaneCenter(2), -1400, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(1), -1600, 30, 50, "DUMMY", 1),
    new Car(road.getLaneCenter(3), -1800, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(0), -2000, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(1), -2200, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(2), -2400, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(1), -2600, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(3), -2800, 30, 50, "DUMMY", 1),
    new Car(road.getLaneCenter(0), -3000, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(2), -3200, 30, 50, "DUMMY", 1),
    new Car(road.getLaneCenter(1), -3400, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(3), -3600, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(0), -3800, 30, 50, "DUMMY", 1)


];

animate();

function save(){
    console.log("SAVED BRAIN");
    localStorage.setItem("bestBrain", 
        JSON.stringify(bestCar.brain));
}

function discard(){
    console.log("DISCARD BRAIN");
    localStorage.removeItem("bestBrain");
}

function generateCars(N){
    const cars = [];
    for(let i=0; i <N; i++){
        cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, "AI"))
    }
    console.log("cars: " + cars.length);
    return cars;
}


//time is automatically sent by requestAnimationFrame()
function animate(time){ 

    //console.log("count: " + count);

    for(let i=0; i<traffic.length; i++){
        traffic[i].update(road.borders, []);   
    }

    //car.update(road.borders, traffic);
    for(let i=0; i<cars.length; i++){
        cars[i].update(road.borders, traffic);
    }

    // what is the best car? think about
    // finding a optimum is called the fitness function
    bestCar = cars.find(
        c=>c.y==Math.min(...cars.map(c=>c.y))
    );

    carCanvas.height = window.innerHeight;
    networkCanvas.height = window.innerHeight;

    carCtx.save();
    carCtx.translate(0, -bestCar.y + carCanvas.height*0.7);
    
    road.draw(carCtx);

    for(let i = 0; i<traffic.length; i++){
        traffic[i].draw(carCtx, "red");
    }

    carCtx.globalAlpha = 0.2;
    //car.draw(carCtx, "black");
    for(let i=0; i<cars.length; i++){
        cars[i].draw(carCtx, "black");
    }
    carCtx.globalAlpha = 1;
    bestCar.draw(carCtx, "blue", true); 


    carCtx.restore();
    //networkCtx.lineDashOffset=-time/100;

    Visualizer.drawNetwork(networkCtx, cars[0].brain);

    //count=count+1;
    requestAnimationFrame(animate);
}