import React from 'react'
import Button from './Button'
import shortid from 'shortid'

export default function Operators({handleArithmeticOps, clearInput}) {
    const operator = [
        {
            id: shortid.generate(),
            text: '+',
            onClick:() => handleArithmeticOps('+'),

        },
        {
            id: shortid.generate(),
            text: '-',
            onClick:() => handleArithmeticOps('-'),

        },
        {
            id: shortid.generate(),
            text: '*',
            onClick:() => handleArithmeticOps('*'),

        },
        {
            id: shortid.generate(),
            text: '/',
            onClick:() => handleArithmeticOps('/'),

        },
        {
            id: shortid.generate(),
            text: '%',
            onClick:() => handleArithmeticOps('%'),

        },
        {
            id: shortid.generate(),
            text: 'clear',
            onClick:() => clearInput(),

        },
    ]
  return (
    <div>
        {operator.map((ops) => <Button onClick={ops.onClick} text={ops.text} key={ops.id} />)}
    </div>
  )
}
