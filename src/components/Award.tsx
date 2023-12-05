import React from 'react'

interface IAwardComponent {
  name: string
}

export function Award({ name }: IAwardComponent ) {
  return (
    <div>
      <i className="fa fa-circle"/>
      { name }
    </div>
  )
}
