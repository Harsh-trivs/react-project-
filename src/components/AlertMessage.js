import React from 'react'

function AlertMessage(props) {
  
  return (
    props.alert && <div>
      <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.message}</strong> 
</div>
    </div>
  )
  
}

export default AlertMessage
