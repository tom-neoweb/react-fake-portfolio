import React, { useRef } from 'react';
import emailjs, { init } from '@emailjs/browser';
init(process.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message");

    emailjs.sendForm('service_rpanxqa', 'template_bilc9th', form.current, process.env.REACT_APP_ID)
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          formMessage.innerHTML = "<p class='succes'>Message envoyé !</p>";

          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 3000);
      }, (error) => {
          console.log(error.text);
          formMessage.innerHTML = "<p class='error'>Une erreur s'est produite, veuillez réessayer !</p>";

          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 3000);
      });
  };

  return (
    <div className="form-container">
        <h2>Me contactez</h2>
        <form ref={form} onSubmit={sendEmail} className="form-content">
            <label>Nom <span>*</span></label>
            <input type="text" name="name" required autoComplete='off' id="name"/>
            <label>Email <span>*</span></label>
            <input type="email" name="email" required autoComplete='off' id="email"/>
            <label>Message</label>
            <textarea name="message" id="mess"/>
            <input className="btn-submit hover button" type="submit" value="Envoyer" />
        </form>

        <div className="formMessage"></div>
    </div>
    // ref={form} est un hook qui récupère ce qui est stocké dans les inputs du formulaire
  );
};

export default ContactForm;