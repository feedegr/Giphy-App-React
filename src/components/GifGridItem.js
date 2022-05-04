import React from 'react';

const GifGridItem = ({ title,url }) => {
    
   
    
    return ( 
        <div className="img-thumbnail mt-5">
            
            
        
            <img src={ url } alt={ title } />
            <p className='mt-3'> { title } </p>
        
        </div>
     )
}
 
export default GifGridItem;