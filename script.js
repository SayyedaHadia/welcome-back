const messages = [
  "Thank you for being a kind and positive part of my life.",
  "You make ordinary days feel a little more special.",
  "I appreciate you and I’m grateful for you.",
  "This is just a small way of saying you matter to me.",
  "Welcome into my life — I hope this makes you smile."
];

const btn = document.getElementById("btn");
const messageBox = document.getElementById("message");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * messages.length);
  typeText(messages[random]);
});

function typeText(text) {
  messageBox.innerHTML = "";
  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      messageBox.innerHTML += text.charAt(i);
      i++;
    } else clearInterval(typing);
  }, 35);
}

/* IMAGE SLIDER */
const slides = document.querySelector(".slides");
let index = 0;

function slideShow() {
  index = (index + 1) % 2;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideShow, 3500);
document.getElementById("agree-btn").addEventListener("click", function() {
  // Redirect to the next page
  window.location.href = "agreement.html";
});
