function displayDateTime() {
    const now = new Date();
    document.getElementById("datetime-display").textContent =
        "Current date & time: " + now.toLocaleString();
}
displayDateTime();

function submitAlert() {
    alert("Your bird sighting form has been submitted!");
}

let funFactNumber = Math.floor(Math.random() * 100) + 1;
console.log("Fun random bird number: " + funFactNumber);

setTimeout(() => {
    console.log("This delayed message appears after 2 seconds.");
}, 2000);

let num = 42;
let numToString = num.toString();
let stringToNum = Number(numToString);

function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    function updateCountdown() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        const diff = midnight - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        countdownElement.textContent =
            `${hours}h ${minutes}m ${seconds}s until midnight`;
        if (diff < 0) countdownElement.textContent = "It is now a new day!";
    }
    setInterval(updateCountdown, 1000);
}
startCountdown();