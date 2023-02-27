 
const enviar = document.getElementById('enviar');

const validación = (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const mail = document.getElementById('mail');
  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre.");
    nombre.focus();
    return false;
  }

  if (apellido.value === "") {
    alert("Por favor, escribe tu apellido.");
    apellido.focus();
    return false;
    
  if (mail.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    mail.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    emailAddress.focus();
    return false;
  }
  
  return true; 
}

const emailVálido = mail => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


submit.addEventListener('click', validate);
}