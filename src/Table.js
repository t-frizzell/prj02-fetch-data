import React from 'react'
import Row from './Row'

// destructure
// Create a container, for better formatting with css
const Table = ({data}) => {
  return (
    <div className="table-container">
        <table>
            <tbody>
                {/* map() ALWAYS needs a key value (React) */}
                {data.map((i) => (
                    <Row
                        key={i.id}
                        item={i}
                    />
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table