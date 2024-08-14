import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="wrapperFooter">
      <div id="logoFooterTitle">
        <a id="logoFooter">cafedealtura.com</a>
        <img id="iconCoffee" src="/assets/img/ps_coffee-hot.png" alt="" />
      </div>
      <div className="containerFooterInfo">
        <div id="containerHelpFooter">
          <p>Te ayudamos en </p>
          <div id="containerPhone">
            <img src="/assets/img/Phone.png" alt="" />
            <a id="buttonTelFooter" href="">
              +34 919 49 05 18
            </a>
          </div>
          <div id="containerMailFooter">
            <img src="/assets/img/MailiconMail.png" alt="" />
            <a id="buttonMailFooter" href="">
              hola@cafedealtura.com
            </a>
          </div>
        </div>
        <ul id="containerListFooter">
          <li>
            <a href="">Tienda</a>
          </li>
          <li>
            <a href="">Suscripción</a>
          </li>
          <li>
            <a href="">Para empresas</a>
          </li>
          <li>
            <a href="">SobreNosotros</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
        <ul id="privacyPolicy">
          <li>
            <a href="">Politica de privacidad</a>
          </li>
          <li>
            <a href="">Politica de cookies</a>
          </li>
          <li>
            <a href="">Terminos y condiciones</a>
          </li>
        </ul>
      </div>
    </div>
    <div id="copyrightFooter">
      Todos los derechos reservados-Café de Altura SL - 2024
    </div>
  </footer>
  )
}

export default Footer
