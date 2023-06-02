import "./menu.scss"


export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")} >
        <ul>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#books">Series</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#works">Store</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#testimonials">Reviews</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#contact">Contact Us</a>
            </li>
        </ul>
    </div>
  )
}
