import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
// import StateLifting from './StateLifting/StateLifting';
// import AppOperation from './InputsTodo/AppOperation';
// import ProductShow from './todo/cart';
// import DynamicForm from './todo/DynamicForm';
// import FormDynamic from './todo/FormDynamic';
// import ShoppingCart from './todo/shopping';

const frontSize = {
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',

}
const Button = styled.button`
  
  border-radius: 3px;
  background-color: ${(props) => (props.dark ? '#dddddd' : 'black')};
  color: ${(props) => (props.dark ? 'black' : 'white')};
  padding: 0.5em 3em;
`;

const PrimaryButton = styled(Button)`
font-size: ${(props) => frontSize[props.size] ?? '1.5rem'};
background-color: ${(props) => (props.color ? 'red': 'black')};
color: ${(props) => (props.color ? 'black': 'white')}
`
function App() {
  return (
    <div>
      <h3>APP</h3>

      <div>
        <Button dark>Button</Button>
        <PrimaryButton color >Primary Button</PrimaryButton>
        {/* <StateLifting/> */}
        {/* <AppOperation/> */}
        {/* <ShoppingCart /> */}
        {/* <ProductShow /> */}
        {/* <DynamicForm /> */}
        {/* <FormDynamic/> */}
        {/* <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">What is your app name?</label>
            <input
              type="text"
              name="name"
              placeholder="mithu"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">What is your email?</label>
            <input
              type="email"
              name="email"
              placeholder="mithu"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">What is your phone number?</label>
            <input
              type="tel"
              name="phone"
              placeholder="phone number"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          <button type="submit">submit</button>
        </form> */}
      </div>
    </div>
  );
}

export default App;
