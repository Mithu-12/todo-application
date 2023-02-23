import React from 'react'

export default function Inputs({onChange, value, name}) {
  return (
   <div>
     <input
          type="number"
          value={value}
          onChange={onChange}
          name={name}
        />
   </div>
  )
}


