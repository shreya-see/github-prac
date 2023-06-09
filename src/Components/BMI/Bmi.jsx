import React, { useState } from 'react';
import '../BMI/Bmi.css'

function BMICalculator() {
  const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiType, setBmiType] = useState('');

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100; // Convert height from cm to meters
      setName("");
      // setAge("");
      setHeight("");
      setWeight("");

    if (weightInKg && heightInMeters && name) 
    {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2)); // Round BMI to 2 decimal places
    
        if(bmiValue <= 16 ) {
            setBmiType("Severe Thinness");
        }
        else if(bmiValue > 16 && bmiValue <= 17 ) {
            setBmiType("Moderate Thinness");
        }
        else if(bmiValue > 17 && bmiValue <= 18.5 ) {
            setBmiType("Mild Thinness");
        }
        else if(bmiValue > 18.5 && bmiValue <= 25 ) {
            setBmiType("Normal Weight");
        }
        else if(bmiValue > 25 && bmiValue <= 30 ) {
            setBmiType("Overweight");
        }
        else if(bmiValue > 30 && bmiValue <= 35 ) {
            setBmiType("Obese Class I");
        }
        else if(bmiValue > 35 && bmiValue <= 40 ) {
            setBmiType("Obese Class II");
        }
        else {
            setBmiType("Obsese Class III");
        }
    } 
    else {
        setBMI(null);
        setBmiType("Please enter the details!");
    }
 };

 const getWeightStatusColor = () => {
    switch (bmiType) 
    {
    case 'Severe Thinness':
        return 'text-red-500';
    case 'Moderate Thinness':
        return 'text-red-500';
    case 'Mild Thinness':
        return 'text-red-500';
    case 'Normal weight':
        return 'text-yellow-400';
    case 'Overweight':
        return 'text-lime-400';
    case 'Obese I':
        return 'text-lime-400';
    case 'Obese II':
        return 'text-lime-400';
    case 'Obese III':
        return 'text-lime-400';
    default:
        return 'black';
    }
  };
      const onNameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const onHeightChangeHandler = (event) => {
        setHeight(event.target.value);
    };
    const onWeightChangeHandler = (event) => {
        setWeight(event.target.value);
    };
    const onClearHandler = () => {
      setName("");
      setHeight("");
      setWeight("");
    };
  return (
    <>
    <div className='group-1 justify-center items-center ml-20 mr-20 mt-10 mb-10 shadow-lg'>
      <h2 className='justify-center font-serif text-4xl items-center tracking-wide mb-10 ml-7'>BMI Calculator</h2>
      <div className='container ml-7'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='input-group mb-6 w-2 h-10'>
                    <span className='input-group-text border-solid border-2 border-s-gray-dark'> name </span>
                    <input type='text' className='form-control border-solid border-2 border-s-gray-dark' placeholder='enter name' aria-label='name'
                        onChange={onNameChangeHandler} value={name}/> 
                </div>
                <div className='input-group mb-6 w-2 h-10'>
                    <span className='input-group-text border-solid border-2 border-s-gray-dark'> height </span>
                    <input type='number' className='form-control border-solid border-2 border-s-gray-dark' placeholder='height in cms' aria-label='height'
                        onChange={onHeightChangeHandler} value={height}
                    /> 
                </div>
                <div className='input-group mb-6 w-2 h-10'>
                    <span className='input-group-text border-solid border-2 border-s-gray-dark'> weight </span>
                    <input type='number' className='form-control border-solid border-2 border-sky-500' placeholder='weight in kgs' aria-label='weight'
                        onChange={onWeightChangeHandler} value={weight}
                    /> 
                </div>
            </div>
            </div>
      <br />
      <div className='row'>
            <div className='col-md'>
                <button type='button' className='btn btn-success rounded-none' onClick={calculateBMI}> calculate </button>
            </div>
            <br/>
            <div className='col-md'>
                <button type='button' className='btn btn-warning rounded-none' onClick={onClearHandler}> clear data </button>
            </div>
        </div>
      <br />
      <div className='details'>
      {bmi && <p className='text-md font-serif font-bold'>Your BMI is : {bmi} </p>}
      {bmiType && <p style={{ color: getWeightStatusColor() }} className={'text-xl font-serif' }> Weight Status : {bmiType} </p>}
    </div>
    </div>
    </div>
    </>
  );
}

export default BMICalculator;
