import { useState } from 'react';

function DynamicInputForm() {
  const [inputValues, setInputValues] = useState([''])

  const handleInputChange = (index, event) => {
    const valeurs = [...inputValues];
    valeurs[index] = event.target.value;
    setInputValues(valeurs);
  }

  const handleAddFields = () => {
    setInputValues([...inputValues, '']);
  }

  const handleRemoveFields = (index) => {
    const valeurs = [...inputValues];
    valeurs.splice(index, 1);
    setInputValues(valeurs);
  }

  return (
    <div>
      {inputValues.map((inputValue, index) => (
        <div key={index}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => handleInputChange(index, event)}
          />
          <button onClick={() => handleRemoveFields(index)}>Remove</button>
        </div>
      ))}
      <button onClick={() => handleAddFields()}>Add field</button>
    </div>
  );
}


export default DynamicInputForm