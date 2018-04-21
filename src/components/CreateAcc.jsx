import React from 'react'
import { Card } from 'semantic-ui-react'
import interests from '../../public/interests.json'


//loops here asking for an array object vs a json
const items = interests;

const CardExampleGroupProps = () => (
  <Card.Group items={items} />
)

export default CardExampleGroupProps