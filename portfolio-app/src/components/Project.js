import React from 'react';

function Project({img, title, link, repo}){
    return(
    <div>
        <h3>{title}</h3>
            <a href={link}><img
             src={img} alt="Horiseon refactored website."></img></a>
            <a href = {repo}>Repository Link</a>
                </div>
    );
}
 
export default Project;