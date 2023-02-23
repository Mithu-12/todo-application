import { useState } from 'react';

export default function Table({ contracts }) {
  const [filter, setFilter] = useState('All');
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  let filterContacts = [];
  if (filter === 'All') {
    filterContacts = contracts;
  } else {
    filterContacts = contracts.filter((contract) => contract.group === filter);
  }
  return (
    <>
      <div>
        <select value={filter} onChange={handleChange}>
          Filter:
          <option value="All">All</option>
          <option value=''>None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Group">Group</option>
        </select>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>group</th>
            </tr>
          </thead>
          <tbody>
            {filterContacts.map((contract) => {
              console.log(contract);
              return (
                <tr>
                  <td>{contract.name}</td>
                  <td>{contract.email}</td>
                  <td>{contract.group}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
