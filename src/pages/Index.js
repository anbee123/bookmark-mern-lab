import {useState} from "react"
import {Link} from "react-router-dom"

function Index(props) {
  const [newForm, setNewForm] = useState({
    title: "", 
    url: "", 
  })
  const loaded = () => {
    return props.bookmark.map((bookmark) => (
      <div key={bookmark._id} className="bookmark">
       <Link to={`/bookmarks/${bookmark._id}`}>
          <h1>{bookmark.title}</h1>
        </Link>
        <h3>{bookmark.url}</h3>
      </div>
    ))
  }
  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createBookmark(newForm)
    setNewForm({

      title: "",
      url: ""
    })
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
       
        <input
          type="text"
          value={newForm.url}
          name="title"
          placeholder="http://"
          onChange={handleChange}
        />
        <input type="submit" value="Create Bookmark" />
      </form>
      {props.people ? loaded() : loading()}
    </section>
  )
}


  export default Index;