import {Routes, Route} from "react-router-dom"
import {useEffect, useState} from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"


function Main(props) {
    return (
        <main>
            <Routes>
                <Route 
                    exact path="/" 
                    element={<Index/>} />
                <Route 
                    path="/bookmarks/:id" 
                    element={<Show 
                     />} />
            </Routes>
        </main>
    )
  }
  
  export default Main;