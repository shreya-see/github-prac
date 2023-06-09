import './App.css';
// import Counter from './Components/Counter';
import Header from './Components/Header/Header';
// import UseEffectHook from './Components/UseEffectHook';
import RoutesModule from './Routes/RoutesModule';

function App() {
  return (
    <>
    {/* <Counter/> */}
    {/* <UseEffectHook/> */}
    <div>
      <Header/>
    </div>
    <div>
      <RoutesModule/>
    </div>
  </>

  );
}

export default App;
