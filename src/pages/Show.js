import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'


function Show(props) {

    const {id} = useParams(); 
    const bookmark = props.bookmark.find((bookmark)=>bookmark._id === id)
    let navigate = useNavigate()

    const [editForm, setEditForm] = useState(bookmark)

    const handleChange =(event) =>{
        setEditForm((prevState) => ({
             ...prevState, [event.target.name]: event.target.value,
        }))
        console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateBookmark(editForm, bookmark._id)
        console.log(editForm)
        navigate("/")
    }
    
        return (
        <div>
            <p>{bookmark.title}</p>

            <form onSubmit={handleSubmit}>
                <input 
                type = "text"
                value = {editForm.title}
                name = "title"
                placeholder = "title"
                onChange ={handleChange}   
                />
                <input 
                type = "text"
                value = {editForm.url}
                name = "url"
                placeholder = "https://"
                onChange ={handleChange}      
                />
                 <input type="submit" value="Update Bookmark" />

            </form>
            
        </div>
        
    )
  }
  
  export default Show;