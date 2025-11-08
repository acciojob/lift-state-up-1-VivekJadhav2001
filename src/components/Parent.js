import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [showModal, setShowModal] = useState(false)
  return (
    <div className='parent h-screen w-screen bg-purple-500'>
        <h1>Parent Component</h1>

        <Child showModal={showModal} setShowModal={setShowModal}/>

    </div>
  )
}

export default Parent