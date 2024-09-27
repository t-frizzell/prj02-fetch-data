import React from 'react'
import ListItem from './ListItem'

const List = ({data}) => {
  return (
    <ul>
        {/* iterate through the data array. Specify individual item "i" */}
        {data.map(i => (
            <ListItem 
                key={i.id}
                item={i}
            />
        ))}
        {/* Use another functional component */}
        {/* Each ListItem will need a "key". key is a built-in parameter */}
    </ul>
  )
}

export default List