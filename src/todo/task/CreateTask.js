// import React, { useState } from 'react';
// import ShowTask from './Showtaks';

// const CreateTasks = ({ addNewTask }) => {
//   const [text, setText] = useState('');

//   return (
//     <div>
//       <input value={text} onChange={(e) => setText(e.target.value)}></input>
//       <button
//         onClick={() => {
//           if (!text) {
//             alert('invalid text');
//           } else {
//             addNewTask(text);
//             setText('');
//           }
//         }}
//       >
//         Create Task
//       </button>
//       <ShowTask text={text}></ShowTask>
//     </div>
//   );
// };

// export default CreateTasks;
