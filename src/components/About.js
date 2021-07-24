import React from "react";
import user from "../data/user"
import Links from "./Links"

// function About(props) {
//  let bio = user.bio;
//   return (
//     <div id="about">
//       <h2>About Me</h2>
//       <p>{bio ? props.bio : null}</p>
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       {/* add your <Links /> component here */}
//       <Links github={props.github} linkedin={props.linkedin} />
//     </div>
//   );
// }
// console.log(user.links.github)



function About(props){

  const bioText = props.bio;

  function bio(){
    if (bioText){
      return <p>{props.bio}</p>
    }
  }
  
    return (
      <div id="about">
        <h2>About Me</h2>
        {bio()}
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     
        <Links github={props.github} linkedin={props.linkedin} />
    </div>
    );
  } 

  export default About;