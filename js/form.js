const contactForm = document.getElementById('contact-test');
const agendaForm = document.getElementById('contact-form');

agendaForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formValue = {
    name: event.target[0].value,
    email: event.target[1].value,
    phone: event.target[2].value,
    service: event.target[2].value,
    date: event.target[3].value,
    time: event.target[4].value,
  };

  agendaForm.reset();
  alert('datos enviados');
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formValue = {
    name: event.target[0].value,
    email: event.target[1].value,
    phone: event.target[2].value,
    comments: event.target[3].value,
  };
  // POST DE INcontactFormACION

  contactForm.reset();
  alert('datos enviados');
});
