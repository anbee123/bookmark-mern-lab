import {Routes, Route} from "react-router-dom"
import {useEffect, useState} from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"


function Main(props) {

    const URL = "http://localhost:4000/bookmarks/"

    const[bookmark, setBookmark] = useState([])

    const getBookmark = async () =>{
        const res = await fetch (URL)
        const data = await res.json()
        setBookmark(data)
        console.log(data)
    }

    const createBookmark = async (bookmark) => {

        await fetch(URL, {
            method: "POST", 
            headers:{
                "Content-Type": "Application/json", 
            }, 
            body: JSON.stringify(bookmark), 
            
        })
        getBookmark()
    }

 
    const updateBookmark = async (bookmark, id) => {

        await fetch (URL + id, {
            method: "PUT", 
            headers:{
                "Content-Type": "Application/json", 
            }, 
            body: JSON.stringify(bookmark), 
        })
        getBookmark()

    }

    const deleteBookmark = async(id) => {
        await fetch (URL + id, {
            method: "DELETE"
        })
        getBookmark()
    }


   useEffect ( () => {
        getBookmark()

    }, [])
   
 



    return (
        <main>
            <Routes>
                <Route 
                    exact path="/" 
                    element={<Index bookmark = {bookmark} createBookmark = {createBookmark} deleteBookmark = {deleteBookmark}/>} />
                <Route 
                    path="/bookmarks/:id" 
                    element={<Show bookmark = {bookmark} updateBookmark = {updateBookmark}/>} />
            </Routes>
        </main>
    )
  }
  
  export default Main;