function toggleDropdown(event) {
    event.preventDefault();

    let dropdown = event.target.parentElement;
    let content = dropdown.querySelector(".dropdown-content");

    content.classList.toggle("show");
}
/* Close when clicking outside */

window.onclick = function(e) {

if(!e.target.matches('.dropdown-btn')){

let dropdowns = document.querySelectorAll(".dropdown-content");

dropdowns.forEach(menu => {
menu.classList.remove("show");
});

}

}
function toggleRates(event){
    event.preventDefault();

    const menu = document.getElementById("ratesDropdown");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}
function toggleDropdown(event) {
    event.preventDefault();

    let dropdown = event.target.parentElement;
    let content = dropdown.querySelector(".dropdown-content");

    content.classList.toggle("show");
}




const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}
   


const data = [
  {
    img: "image10.png",
    text: "Complimentary airport rides via Careem app. Mastercard World Elite & World benefits available."
  },
  {
    img: "image21.png",
    text: "Get 20% instant discount (up to AED 14) on grocery and food orders once a month on the Talabat app. Use promo code “MASTERCARD” at checkout."
  },
  {
    img: "image22.png",
    text: "Access up to 1,200 Airport lounges worldwide with Mastercard Travel Pass app."
  },
  {
    img: "image23.png",
    text: "Enjoy instant discounts once a month when using Carrefour app/website until 30th Sep 2026.Mastercard World Elite: AED 60 discount on eligible purchases of AED 300 or more, using code MA60.Mastercard World: AED 40 discount on eligible purchases of AED 250 or more, using code MA40."
  },
  {
    img: "image24.png",
    text: "Spend in the local currency overseas and shop online globally with multi-currency Debit Card access."
  }
];

function changeBenefit(index) {

  document.getElementById("benefitImg").src = data[index].img;
  document.getElementById("benefitContent").innerHTML = `
    <p>${data[index].text}</p>
    <p class="terms">T&C’s apply.</p>
    <button class="learn-btn">Learn More</button>
  `;

  document.querySelectorAll(".item").forEach(i => i.classList.remove("active"));
  document.querySelectorAll(".item")[index].classList.add("active");
}


showSlide(currentIndex);

setInterval(() => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}, 2000); 
  const toggleBtn = document.getElementById("toggleBtn");
  const extraCard = document.querySelector(".market-card-extra");

  toggleBtn.addEventListener("click", () => {
    if (extraCard.style.display === "block") {
      extraCard.style.display = "none";
      toggleBtn.textContent = "View More";
    } else {
      extraCard.style.display = "block";
      toggleBtn.textContent = "View Less";
    }
  });

  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.blog-cards');

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      cards.forEach(c => c.style.display = 'none');

      const target = document.querySelector(tab.getAttribute('href'));
      if (target) target.style.display = 'grid';
    });
  });





