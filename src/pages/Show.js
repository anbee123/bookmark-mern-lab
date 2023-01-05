import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'





function Show(props) {

    const {id} = useParams(); 
    const bookmark = props.bookmark.find((bookmark)=>bookmark._id === id)
    
        return (
        <div>
            <p>{bookmark.title}</p>
            
        </div>
        
    )
  }
  
  export default Show;