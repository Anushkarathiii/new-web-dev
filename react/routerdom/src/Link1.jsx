import React from 'react'
import {Routes,Link,Route} from 'react-router-dom'
function Home(){
    return <h1>this is my home page</h1>
}
function About(){
    return <h1>this is my about page</h1>
}
function Link1(){
    return(
        <div>
            <nav>
                <Link to="/">HOME</Link>
                 <Link to="/about">about</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<about/>}></Route>
            </Routes>
        </div>
    )
}