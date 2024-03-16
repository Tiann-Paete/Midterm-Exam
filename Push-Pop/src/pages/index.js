import React, { useState } from 'react';

export default function Home() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    if (!inputValue.trim()) {
      alert('Please enter a valid number.');
      return;
    }
    const newItem = parseInt(inputValue);
    setStack([...stack, newItem]);
    setInputValue('');
  };

  const handlePop = () => {
    if (stack.length === 0) {
      alert('Stack is empty!');
      return;
    }
    const updatedStack = Array.from(stack);
    updatedStack.length = updatedStack.length - 1;
    setStack(updatedStack);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4">
        <input
          type="number"
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
      <div className="border border-gray-300 p-2 rounded-md">
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