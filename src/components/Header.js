import {Link} from "react-router-dom"

function Header(props) {
    return (
        <nav>
            <Link to = "/">
                <h3>MY BOOKMARKS</h3>
            </Link>
        </nav>
    )
  }
  
  export default Header;