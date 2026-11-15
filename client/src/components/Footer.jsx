import "../styles/Footer.scss"
import { LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/logo.png" alt="logo" /></a>
      </div>


      <div className="footer_right">
        <h3>Asistență</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>0741173244</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p><a href="mailto:ediradeanu12345@gmail.com">ediradeanu12345@gmail.com</a></p>
        </div>
        <div className="footer_right_info footer_legal">
          <a href="/confidentialitate">Confidențialitate</a>{" · "}<a href="/cookies">Cookies</a>{" · "}<a href="/en/privacy">Privacy (EN)</a>
        </div>
        <p className="footer_note">Anunțuri demonstrative · proiect de licență</p>
      </div>
    </div>
  )
}

export default Footer