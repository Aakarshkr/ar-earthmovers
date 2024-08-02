import React, { useState } from 'react';
import './QuarryDetails.css'; // Import the CSS file

const QuarryDetails = () => {
  const [showAddQuarry, setShowAddQuarry] = useState(false);
  const [showSelectQuarry, setShowSelectQuarry] = useState(false);
  const [quarryName, setQuarryName] = useState('');
  const [selectedQuarry, setSelectedQuarry] = useState('');

  const handleAddQuarryClick = () => {
    setShowAddQuarry(!showAddQuarry);
  };

  const handleSelectQuarryClick = () => {
    setShowSelectQuarry(!showSelectQuarry);
  };

  const handleQuarryNameChange = (e) => {
    setQuarryName(e.target.value);
  };

  const handleSelectedQuarryChange = (e) => {
    setSelectedQuarry(e.target.value);
  };

  const handleAddQuarrySubmit = () => {
    alert(`Added Quarry: ${quarryName}`);
    setQuarryName('');
    setShowAddQuarry(false);
  };

  const handleSelectQuarrySubmit = () => {
    alert(`Selected Quarry: ${selectedQuarry}`);
    setShowSelectQuarry(false);
  };

  return (
    <div className="container">
      <h1>Quarry Details Page</h1>
      
      <div className="toggle-section-container">
        <h2 onClick={handleAddQuarryClick}>
          {showAddQuarry ? 'Cancel Add New Quarry' : 'Add New Quarry'}
        </h2>
        <div className={`toggle-section ${showAddQuarry ? 'show' : ''}`}>
          <input
            type="text"
            placeholder="Enter new quarry name"
            value={quarryName}
            onChange={handleQuarryNameChange}
          />
          <button onClick={handleAddQuarrySubmit}>Add Quarry</button>
        </div>
      </div>

      <div className="toggle-section-container">
        <h2 onClick={handleSelectQuarryClick}>
          {showSelectQuarry ? 'Cancel Select Quarry' : 'Select Quarry'}
        </h2>
        <div className={`toggle-section ${showSelectQuarry ? 'show' : ''}`}>
          <select value={selectedQuarry} onChange={handleSelectedQuarryChange}>
            <option value="">Select an option</option>
            <option value="quarry1">Quarry 1</option>
            <option value="quarry2">Quarry 2</option>
            <option value="quarry3">Quarry 3</option>
          </select>
          <button onClick={handleSelectQuarrySubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default QuarryDetails;
