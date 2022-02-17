import React from 'react';
import { useEffect, useState } from 'react'

const imageStyles = {
    border: '3px solid black',
    borderRadius: '50%',
    width: '250px'
}

function Profile() {
    // grabbing name off of profile
    const [gitHubName, setGitHubName] = useState('')     
    // grabbing the url of account
    const [gitHubURL, setGitHubURL] = useState('')   
    // For Bonus grabbing an avatar img
    const [gitHubImageURL, setGitHubImageURL] = useState('')              
    // grabbing bio from the profile page
    const [gitHubBio, setGitHubBio] = useState('')
  
    useEffect(() => {
        fetch('https://api.github.com/users/dvogel345')
        .then(res => res.json())
        .then(data => {
          setGitHubName(data.name)
          setGitHubURL(data.html_url)
          setGitHubImageURL(data.avatar_url)
          setGitHubBio(data.bio)
        })
    }, [])
  
    return (
      <div className="App">
        <div className='card'>
        <React.Fragment>
        <div style={{ width: "18rem"}}>
          <div variant="top" src={gitHubImageURL} alt='Github profile avatar' width='200' height='200'/>
          <div>
              
              {gitHubName}
              {gitHubBio}
              <br></br>
              <a href={gitHubURL}><button>Link to GitHub profile</button></a>
              </div>
            </div>  
        </React.Fragment>
        </div>
      </div>
    );
}
// const Profile = (props) => (
//     <div>
//         <div>
//         {  
//             <React.Fragment>
//                 <img src={props.profile.name} alt={props.profile.name} style={imageStyles}/>
//                 <p>{props.profile.location}</p>
//                 <p>{props.profile.bio}</p>
//                 <p>Followers: {props.profile.followers}<span> || </span>Following: {props.profile.following}</p>
//                 <button><a href={props.profile.html_url}>View Github Profile</a></button>
//             </React.Fragment>
//         }
//         </div>
//     </div>
// );

export default Profile;