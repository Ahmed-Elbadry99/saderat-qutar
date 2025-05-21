AOS.init();


const showMenu = document.querySelector('.show-menu');

if(showMenu){
     showMenu.addEventListener("click", () => {
          document.querySelector('.responsive-menu').classList.add("show")
          document.querySelector('.overlay').classList.add("show")
     })


     document.querySelector('.overlay').addEventListener("click", () => {
          document.querySelector('.responsive-menu').classList.remove("show")
          document.querySelector('.overlay').classList.remove("show")
     })
}





// 


document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    const selected = document.querySelector('.selected-option');
    const icon = option.dataset.icon;
    selected.innerHTML = `<img src="${icon}" class="option-icon" alt=""> ${option.textContent.trim()}`;
    document.getElementById('mySelectValue').value = option.dataset.value;
  });
});



// Countdown

// Set the target date for the event (Year, Month(0-11), Day, Hour, Minute)
const targetDate = new Date(2025, 6, 15, 9, 0); // January 15, 2024 at 9:00 AM

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Countdown Finished!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("sec").textContent = seconds;
}

updateCountdown();
let timer = setInterval(updateCountdown, 1000);





// y




const animateProgress = (wrappers) => {
  // Find max target number to calculate animation duration
  const maxTarget = Math.max(...Array.from(wrappers).map(w => 
    parseInt(w.getAttribute("data-percent"))
  ));
  
  const duration = 2000; // Animation duration in ms
  const fps = 60;
  const frames = duration / (1000/fps);
  const increment = maxTarget / frames;
  
  let current = 0;
  
  const interval = setInterval(() => {
    if (current > maxTarget) {
      clearInterval(interval);
      // Ensure final values are set
      wrappers.forEach(wrapper => {
        const target = parseInt(wrapper.getAttribute("data-percent"));
        wrapper.querySelector(".progressText").textContent = target;
      });
      return;
    }

    wrappers.forEach(wrapper => {
      const target = parseInt(wrapper.getAttribute("data-percent")); 
      const text = wrapper.querySelector(".progressText");
      // Scale current value proportionally for each counter
      const scaledValue = Math.min(Math.round(current * (target/maxTarget)), target);
      text.textContent = scaledValue;
    });

    current += increment;
  }, 1000/fps);
};

// Watch the whole section only
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Reset text for all counters
        const counters = document.querySelectorAll(".statistics-numbers-item-counter");
        counters.forEach(wrapper => {
          wrapper.querySelector(".progressText").textContent = "0";
        });
        // Start animation for all counters together
        animateProgress(counters);
      }
    });
  },
  { threshold: 0.5 }
);

const progressSection = document.querySelector(".statistics-numbers");
if (progressSection) {
  observer.observe(progressSection);
}