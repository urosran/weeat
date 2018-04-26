import React from 'react'
import { Card } from 'semantic-ui-react'
import interests from '../../public/interests.json'
import {  Link } from 'react-router-dom';

let interestsUser = [];

//loops here asking for an array object vs a json
const items = interests.interests.values;
let names = [];
items.forEach( (val, i) => {
  names.push({
    header :val.name,
  });
});
console.log(names)

const handleClick = function(e){
   e.target.parentNode.parentNode.style.border="1px solid black";
   console.log(e.target.textContent);
   interestsUser.push(e.target.textContent);

}
const handleSubmit = function(){
  fetch("/db/interests", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/JSON"
    }),
    body: JSON.stringify({
      interests:interestsUser,
    })
  })
}

const CardExampleGroupProps = () => (
  <div>
    <Card.Group items={names} onClick={(e) => {handleClick(e)} }/>
    <Link onClick={()=>{handleSubmit()}} to="/usdan">Submit</Link>
  </div>
)



export default CardExampleGroupProps