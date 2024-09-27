import React from 'react'
import Cell from './Cell'

const Row = ({item}) => {
  return (
    <tr>
        {/* Map through each key of the passed item */}
        {/* Destructure key and value from the passed item */}
        {Object.entries(item).map(([key, value]) => {

            {/* Use another re-usable functional component */}
            return (
                <Cell 
                    key={key}
                    cellData={JSON.stringify(value)}
                />
            )
            {/* Some of the values are nested objects, and must be converted */}
        })}
    </tr>
  )
}

export default Row