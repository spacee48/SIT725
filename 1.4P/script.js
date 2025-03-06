var count = 0;
var counter = document.getElementById('counter');

function update() {
    counter.textContent = count;
}

function increment() {
    count++;

    update();
}

function decrement() {
    count--;

    update();
}

function resetCounter() {
    count = 0;

    update();
}