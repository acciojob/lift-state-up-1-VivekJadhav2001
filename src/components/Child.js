import React from 'react'

function Child({showModal,setShowModal}) {
  return (
    <div>
        <h2>Child Component</h2>

        <button onClick={()=>setShowModal((prev)=>!prev)}>Show Modal</button>

        {showModal &&
        <div>
            <h3>Modal Content</h3>
            <p>This is the modal content.</p>
        </div>
        } 
    </div>
  )
}

export default Child