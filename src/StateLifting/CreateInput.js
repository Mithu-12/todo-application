import React, { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  group: '',
};
export default function CreateInput({ getContractor }) {
  const [inputValue, setInputValue] = useState({ ...initialState });

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getContractor(inputValue);
    setInputValue({ ...initialState });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            name:
            <input
              text="text"
              name="name"
              value={inputValue.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            email:
            <input
              text="text"
              name="email"
              value={inputValue.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="group">
            group:
            <select
              text="text"
              name="group"
              value={inputValue.group}
              onChange={handleChange}
            >
              <option value=''>select group</option>
              <option value="Home">Home</option>
              <option value="Office">Office</option>
            </select>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
