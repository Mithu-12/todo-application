// import { useState } from 'react';

// const formFields = {
//   name: {
//     type: 'name',
//     label: 'Enter your name',
//     placeholder: 'Mithu vowmick',
//   },
//   email: {
//     type: 'email',
//     label: 'Enter your email',
//     placeholder: 'mithu@gmail.com',
//   },
//   phone: {
//     type: 'tel',
//     label: 'Enter your phone number',
//     placeholder: '246236135',
//   },
//   birthDate: {
//     type: 'date',
//     label: 'Enter your birth date',
//     placeholder: 'dd/mm/year'
//   }
// };

// const transformObject = (obj) => {
//   return Object.keys(obj).reduce((acc, cur) => {
//     acc[cur] = {
//       ...obj[cur],
//       value: '',
//     };
//     return acc;
//   }, {});
// };

// const myObject = (obj) => {
//   return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
// };

// const DynamicForm = () => {
//   const [formState, setFormState] = useState(transformObject(formFields));
//   const formData = myObject(formState);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const values = Object.keys(formState).reduce((acc, cur) => {
//       acc[cur] = {
//         ...formState[cur].value,
//       };
//       return acc;
//     }, {});
//     console.log('hello@.com',values);
//   };

//   const handleChange = (event) => {
//     setFormState({
//       ...formState,
//       [event.target.name]: {
//         ...formState[event.target.name],
//         value: event.target.value,
//       },
//     });
//   };

 
//   return (
//     <form onSubmit={handleSubmit}>
//       {formData.map((item, index) => (
//         <div key={index}>
//             <label>{item.label}</label>
//             <input
//               type="text"
//               name={item.name}
//               placeholder={item.placeholder}
//               value={item.value}
//               onChange={handleChange}
//             />
          
//         </div>
//       ))}
//       <div>
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// };
// export default DynamicForm;
