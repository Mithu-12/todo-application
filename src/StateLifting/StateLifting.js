import React, { useState } from 'react';
import CreateInput from './CreateInput';
import Table from './UserTable';


export default function StateLifting() {
  const [contracts, getContracts] = useState([]);
  const getContractor = (inputValue) => {
    getContracts([].concat(inputValue, contracts));
  };
  return (
    <div>
      <h3>State Lifting</h3>
      <CreateInput getContractor={getContractor} />
      <Table contracts={contracts} />
      
      
    </div>
  );
}
