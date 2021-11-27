import React from 'react'
import './confirm.css'

function Confirm() {
    return (
        <div className='bdy'>
        <div className="card">
        <div className='bdg'>
          <i className="checkmark">✓</i>
        </div>
          <h1 className='hh1'>Success</h1> 
          <p className='pp'>We received your request;<br/> A confirmation mail has been sent to the candidate!</p>
        </div>
        </div>
    )
}

export default Confirm
