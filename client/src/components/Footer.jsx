import "../styles/Footer.scss"
import { LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/logo.png" alt="logo" /></a>
      </div>


      <div className="footer_right">
        <h3>Asistenta</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>0741173244</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>eduard@support.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer