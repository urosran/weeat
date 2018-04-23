import React from 'react'
import { Card } from 'semantic-ui-react'
import interests from '../../public/interests.json'

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
   e.target.parentNode.parentNode.style.border="1px solid black"
}

const CardExampleGroupProps = () => (
  <Card.Group items={names} onClick={(e) => {handleClick(e)} }/>
)

export default CardExampleGroupProps