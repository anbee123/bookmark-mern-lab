import {Link} from "react-router-dom"

function Header(props) {
    return (
        <nav>
            <Link to = "/">
                <h2>My Bookmarks</h2>
            </Link>
        </nav>
    )
  }
  
  export default Header;