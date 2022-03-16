import React from 'react'

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  const handleDragStart = () => {
    console.log('hello')
  }

  return (
    <div>
      <input onChange={onChange}/>
      <div draggable onDragStart={handleDragStart}>Drag me!</div>
    </div>
  )
}

export default EventComponent
