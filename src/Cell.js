import React from 'react'

const Cell = ({cellData}) => {
  return (
    <td>
        {/* Use data since cell has been stringified */}
        {cellData}
    </td>
  )
}

export default Cell