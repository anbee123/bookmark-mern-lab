import {Link} from "react-router-dom"
import {useState} from "react"



function Index(props) {

    const [newForm, setNewForm] = useState({
        title: "", 
        url: "",
    }) 

    const removeBookmark = (id) => {

        props.deleteBookmark(id)
    }

    const loaded = () => {

        return props.bookmark.map((bookmark) => (
            <div className = "bookmarks" key = {bookmark._id}>
                <Link to = {`/bookmarks/${bookmark._id}`}>
                <h3>{bookmark.title}</h3>
                </Link>
                <h3>{bookmark.url}</h3>
                {/* anonymous function: use when you need pass arguments */}
                <button id = "button" onClick = {()=>removeBookmark(bookmark._id)}>Delete</button>
            </div>
        ))
    }

    const handleChange = (event) => {

        setNewForm((prevState) => ({
            ...prevState, [event.target.name]: event.target.value, 

        }))
    }

    const handleSubmit = (event) =>{

        event.preventDefault()
        props.createBookmark(newForm)
        setNewForm({
            title: "", 
            url: "",
        })

    }

 
    const loading = () => {
        return <h1>Loading...</h1>
      }

   return(
        <section>                 
            <form onSubmit = {handleSubmit}>
                <input
                    type = "text"
                    value = {newForm.title}
                    name = "title"
                    placeholder = "title"
                    onChange = {handleChange}
                />
                <input
                    type = "text"
                    value = {newForm.url}
                    name = "url"
                    placeholder = "https://"
                    onChange = {handleChange}
                />
                <input
                    type = "submit"
                    value = "Add Bookmark"
                />
            </form>
                {props.bookmark ? loaded() : loading()}
        </section>

   )

  }
  
  export default Index;