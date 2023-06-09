import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Counter from '../Components/Counter';
import UseEffectHook from '../Components/UseEffectHook';
import Bmi from '../Components/BMI/Bmi';
import Weather from '../Components/Weather/Weather';
import PageNotFound from '../Components/PageNotFound/PageNotFound';
import CounterPrac from '../Components/CounterPrac/CounterPrac';

const RoutesModule = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Counter/>} />
      <Route path="counter" element={<Counter/>}/>
      <Route path="useeffect" element={<UseEffectHook/>}/>
      <Route path="bmi" element={<Bmi/>}/>
      <Route path="weather" element={<Weather/>}/>
      <Route path="counter1" element={<CounterPrac/>}/>
      <Route path="*" element={<PageNotFound/>}/>

      </Routes>
    </>
  )
}

export default RoutesModule;
