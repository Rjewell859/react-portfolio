import React from 'react';

function Project({img, title, link, repo, alt}){
    return(
    <div>
        <h3>{title}</h3>
            <a href={link}><img
             src={img} alt={alt}></img></a>
            <a href = {repo}>Repository Link</a>
                </div>
    );
}
 
export default Project;