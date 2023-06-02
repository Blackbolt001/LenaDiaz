import "./topbar.scss"
import {Person,Mail} from '@material-ui/icons'

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"> Lena Diaz Novels</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>(555) 555.5555</span>
          </div>
          <div className="itemContainer">
          <Mail className="icon"/>
          <span>lena@lenadiaz.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>
        </div>
      </div>
        
    </div>
  )
}
