import React from 'react'

export const Alert = (prop) => {
  return (
    <div class={`alert alert-${prop.alert.type}`} role="alert">
    {prop.alert.msg} 
  </div>
  )
}
