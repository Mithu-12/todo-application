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

import React from 'react';
import PropTypes from 'prop-types';
import Histories from './histories';

export default function HistorySection(props) {
  const { histories, restoreHistory, handleRestore } = props;
  console.log(histories);

  return histories.length === 0 ? (
    <div>
      <p>History</p>
      <small>There are no history</small>
    </div>
  ) : (
    <div>
      {histories.map((historiesItem) => (
       <Histories
          key={historiesItem.id}
          historiesItem={historiesItem}
          disabled={restoreHistory === historiesItem.id}
          handleRestore={handleRestore}
        />
      ))}
    </div>
  );
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
