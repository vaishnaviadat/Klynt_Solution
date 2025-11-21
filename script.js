

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for nav links
document.querySelectorAll('a.nav-link[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Project modal fill from data attributes
const projectModal = document.getElementById('projectModal');
projectModal.addEventListener('show.bs.modal', function (event) {
  const card = event.relatedTarget;
  const title = card.getAttribute('data-title');
  const desc = card.getAttribute('data-desc');
  const img = card.getAttribute('data-img');
  const link = card.getAttribute('data-link');

  document.getElementById('projectModalLabel').textContent = title;
  document.getElementById('projectModalDesc').textContent = desc;
  document.getElementById('projectModalImg').src = img;
  document.getElementById('projectModalLink').href = link || '#';
});

// Simple contact form validation
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(!contactForm.checkValidity()){
      contactForm.classList.add('was-validated');
      return;
    }
    // For now show a friendly message (replace with real submit later)
    alert('Thanks! Your message was received (demo).');
    contactForm.reset();
    contactForm.classList.remove('was-validated');
  });
}

