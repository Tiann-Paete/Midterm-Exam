import React, { useState } from 'react';

export default function Home() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    if (!inputValue.trim()) {
      alert('Please enter a valid input.');
      return;
    }
    const newItem = inputValue;
    const updatedStack = stack.concat(newItem);
    setStack(updatedStack);
    setInputValue('');
  };

  const handlePop = () => {
    if (stack.length === 0) {
      alert('Stack is empty!');
      return;
    }
    const updatedStack = stack.slice(0, stack.length - 1);
    setStack(updatedStack);
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center h-screen">
      <div className="border border-gray-300 p-4 rounded-md">
        <div className="mb-4">
          <input
            type="text"
            className="mr-2 px-2 py-1 border border-gray-300 rounded-md"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="bg-red-500 text-white px-5 py-1 rounded-md mr-2" onClick={handlePop}>
            Pop
          </button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-md" onClick={handlePush}>
            Push
          </button>
        </div>
        {stack.length === 0 ? (
          <p className="text-gray-500">Stack is empty.</p>
        ) : (
          <ul>
            {stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}