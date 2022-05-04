import React, { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['Rick and Morty']);

  


    return (
        <>
        <nav className="navbar navbar-light bg-light ">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Gif Expert App</span>
             </div>
        </nav>
            
            <AddCategory setCategories={setCategories}/>

            
            
            <ol>
                <ul>
                {
                    categories.map(category => 
                        <GifGrid 
                        key= { category }
                        category= { category }
                        />
                    )
                }
                </ul>
            </ol>
        </>
    )
}