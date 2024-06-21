import React from 'react';
import './App.css';

function App() {
  const carManufacturers = [
    {
      name: 'Toyota',
      country: 'Japan',
      models: [
        { name: 'Corolla', year: 2021, price: 20000 },
        { name: 'Camry', year: 2022, price: 25000 },
        { name: 'Prius', year: 2023, price: 27000 }
      ]
    },
    {
      name: 'Ford',
      country: 'USA',
      models: [
        { name: 'Fiesta', year: 2020, price: 15000 },
        { name: 'Mustang', year: 2022, price: 35000 },
        { name: 'Explorer', year: 2021, price: 40000 }
      ]
    },
    {
      name: 'BMW',
      country: 'Germany',
      models: [
        { name: 'X5', year: 2022, price: 60000 },
        { name: '3 Series', year: 2023, price: 50000 },
        { name: 'i8', year: 2021, price: 140000 }
      ]
    },
    {
      name: 'Tesla',
      country: 'USA',
      models: [
        { name: 'Model S', year: 2023, price: 79999 },
        { name: 'Model 3', year: 2022, price: 49999 },
        { name: 'Model X', year: 2021, price: 89999 }
      ]
    },
    {
      name: 'Hyundai',
      country: 'South Korea',
      models: [
        { name: 'Elantra', year: 2023, price: 20000 },
        { name: 'Santa Fe', year: 2022, price: 35000 },
        { name: 'Palisade', year: 2021, price: 40000 }
      ]
    }
  ];
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Car Manufacturers</h1>
        <ul>
          {carManufacturers.map((car) => (
            <li>{car.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
          }


export default App;
