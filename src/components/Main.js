import {Routes, Route} from "react-router-dom"
import {useEffect, useState} from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"


function Main(props) {
    const [bookmark, setBookmark] = useState([])
    const URL = "http://localhost:3001/bookmarks"
    const getBookmark = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setBookmark(data)
      }
    
      const createBookmark = async (bookmark) =>  {
        // POST
        await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json"
          },
          body: JSON.stringify(bookmark)
        })
    
        // GET
        getBookmark()
      }
    
      const updateBookmark = async(bookmark, id) => {
        await fetch(URL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json"
          },
          body: JSON.stringify(bookmark)
        })
    
        getBookmark()
      }
    
      const deleteBookmark = async(id) => {
        await fetch(URL + id, {
          method: "DELETE"
        })
    
        getBookmark()
      }
    
      useEffect(() => {
        getBookmark()
      }, [])
    

      return (
        <main>
          <Routes>
            <Route 
              exact
              path="/" 
              element={<Index bookmark={bookmark} createBookmark={createBookmark}/>} />
            <Route 
              path="/bookmarks/:id"
              element={
              <Show 
                bookmark={bookmark}
                updatebookmark={updateBookmark}
                deleteBookmark={deleteBookmark}
                />
              } />
          </Routes>
        </main>
      )
    }
  
  export default Main;