import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Histories({historiesItem, disabled, handleRestore}) {
 console.log(historiesItem)
  return(
    <div>
     
        return (
          <div>
            <p>
              Operation:{' '}
              <strong>
                {historiesItem.inputs.inputboxA} {historiesItem.operators}{' '}
                {historiesItem.inputs.inputboxB}
              </strong>{' '}
              Result: <strong>{historiesItem.result}</strong>
            </p>
            <p>{historiesItem.date.toLocaleDateString()}</p>
            <Button 
            text='restore'
              onClick={() => handleRestore(historiesItem)}
              disabled={disabled}
            >

            </Button>
          </div>
        );
    </div>
  )
}

Histories.propTypes = {
  Histories: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.shape({
      inputboxA: PropTypes.number.isRequired,
      inputboxB: PropTypes.number.isRequired,
    }).isRequired,
    operators: PropTypes.string.isRequired,
    date: new Date(),
    result: PropTypes.number.isRequired,
  }),
  onData: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
};


// import React from 'react'
// import Histories from './histories'

// export default function HistorySection({histories, restoreHistory, handleRestore}) {
//     console.log(histories)
//   return (
//     <div>
//       {

//         histories.map((historyItem) => <Histories key={historyItem.id} historyItem={historyItem} disabled={restoreHistory === historyItem.id} handleRestore={handleRestore}/>)
//       }
//     </div>
//   )
// }