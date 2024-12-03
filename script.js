// JavaScript para alternar os nomes ao passar o mouse
const nameElement = document.getElementById("name");
const names = ["Livian", "Lih", "Lili", "Lia"];
let currentIndex = 0;

nameElement.addEventListener("mouseover", function() {
    currentIndex = (currentIndex + 1) % names.length;
    nameElement.textContent = names[currentIndex];
    nameElement.className = names[currentIndex].toLowerCase(); // Muda a classe para aplicar a cor correspondente
});
