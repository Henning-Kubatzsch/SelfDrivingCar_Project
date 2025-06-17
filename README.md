# Self-Driving Car Project 🚗🧠

A browser-based machine learning simulation demonstrating evolutionary neural networks for autonomous driving — built entirely in **JavaScript**.

---

## 💡 About This Project

This project explores evolutionary training of neural networks to control self-driving cars navigating a road without collisions. Running fully in-browser, it requires no backend or setup, making it a lightweight and accessible demo of ML concepts in action.

Inspired by Dr. Radu Mariescu-Istodor’s excellent [Self-Driving Car course](https://www.youtube.com/watch?v=NkI9ia2cLhc&list=PLB0Tybl0UNfYoJE7ZwsBQoDIG4YN9ptyY), it combines raycasting sensors, genetic mutation, and live neural network visualization.

---

## 🚀 Getting Started

Open `index.html` in your browser — no installation or server required. Watch the cars evolve and learn right on the page.

---

## 🔧 How It Works

### Evolutionary Neural Networks

* Population of 1000 cars, each controlled by a feedforward neural network.
* Five raycast sensors feed distance inputs into the network.
* The network outputs four control signals: accelerate, brake, steer left, and steer right.

The car that travels the furthest without crashing is selected as the best performer for the next generation.

### Save & Mutate

You can save the top-performing neural network to `localStorage` with a click. On reload, one car keeps the saved network intact, while others receive mutated variations — enabling gradual performance improvement over generations.

---

## 🧠 Neural Network Architecture

* 5 input neurons (distance sensors)
* 1 hidden layer with 6 neurons
* 4 output neurons (control commands)
* Live visualization of the network activations as it learns

---

## ⚙️ Features

* Pure JavaScript implementation — no external ML dependencies
* Raycasting-based collision detection
* Genetic mutation for evolutionary learning
* Save & restore networks via browser storage
* Fully client-side with live visualization

---

## 📫 Connect & Collaborate

Feel free to reach out if you want to discuss this project or explore similar ML demos!

---

## 🙏 Acknowledgements

Thanks to [Rad Maricescu-Istodor](https://www.youtube.com/watch?v=NkI9ia2cLhc&list=PLB0Tybl0UNfYoJE7ZwsBQoDIG4YN9ptyY) for the inspiring course that laid the foundation for this project.

