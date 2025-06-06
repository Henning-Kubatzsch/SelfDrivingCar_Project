# Self-Driving Car Project 🚗🧠

![Screenshot](images/screenshot_app.png)

This is a simple yet insightful machine learning project built with **JavaScript**, simulating self-driving car behavior through evolutionary training.

> **Inspired by:**  
> [Self-Driving Car – Full Course by Rad Maricescu-Istodor](https://www.youtube.com/watch?v=NkI9ia2cLhc&list=PLB0Tybl0UNfYoJE7ZwsBQoDIG4YN9ptyY)

---

## 🧠 Project Overview

This project implements an **evolutionary neural network** approach to train self-driving cars to navigate a road without collisions. The training occurs entirely in the browser — no backend or training pipeline setup required.

### 🚀 How to Run
Just open the `index.html` file in your browser — no installation or server needed.

---

## 🔧 How It Works

### 🧬 Evolutionary Algorithm

A population of `N = 1000` randomly initialized neural networks (MLPs) controls 1000 virtual cars. Each car is equipped with five distance sensors using **raycasting** and a **segment intersection** algorithm.

```js
const N = 1000;
````

These sensors feed input into the neural network, allowing each car to react to the road environment.

### 🏆 Best Performer Selection

At every simulation step, the car that has progressed the furthest (based on its `y` coordinate) is selected as the `bestCar`:

```js
bestCar = cars.find(
    c => c.y === Math.min(...cars.map(c => c.y))
);
```

---

## 💾 Save & Mutate

By clicking the **💾 icon** in the middle of the canvas, you can save the neural network (called `bestBrain`) of the best-performing car.

On the next page load:

* One car retains the saved `bestBrain` unaltered.
* The remaining `N - 1` cars receive slightly mutated versions of it:

```js
if (localStorage.getItem("bestBrain")) {
    for (let i = 0; i < cars.length; i++) {
        cars[i].brain = JSON.parse(localStorage.getItem("bestBrain"));
        if (i !== 0) {
            NeuralNetwork.mutate(cars[i].brain, 0.1);
        }
    }
}
```

Repeat this process as many times as you'd like — the network will gradually improve over iterations.

---

## 🧠 Features

* ✅ Pure JavaScript – no external ML libraries
* ✅ Raycasting-based collision detection
* ✅ Genetic-like mutation for evolutionary learning
* ✅ Save and restore trained networks using `localStorage`
* ✅ Works entirely in the browser
* ✅ Neural network is visualized live as it learns

---

## 🧩 Neural Network Architecture

Each car is controlled by a **feedforward neural network** with the following structure:

* **5 input neurons** – representing the distance values from the five raycast sensors
* **1 hidden layer** – with **6 neurons**
* **4 output neurons** – corresponding to the four directional control decisions:

  * ⬆️ accelerate
  * ⬇️ brake
  * ⬅️ steer left
  * ➡️ steer right

The full network is **visualized on screen in real-time**, so you can observe the live activations and structure as the learning progresses.

---

## 📎 Acknowledgements

This project is heavily inspired by the excellent [Self-Driving Car series by Rad Maricescu-Istodor](https://www.youtube.com/watch?v=NkI9ia2cLhc&list=PLB0Tybl0UNfYoJE7ZwsBQoDIG4YN9ptyY).

---

