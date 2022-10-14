import React from 'react'

export const Alert = (prop) => {
  return (
    <div style={{height:"60px"}}>
    <div className={`alert alert-${prop.alert.type}`} role="alert">
    {prop.alert.msg} 
  </div>
  </div>
  )
}
