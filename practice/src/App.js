import { Profiler, Suspense } from 'react';
import './App.css';
import Comp from './Components/Comp';
import Condition from './Components/Condition';
import { CustomHook } from './Components/CustomHook';
import UseActionState from './Components/UseActionState';
// import UseCallback from './Components/usecallback/UseCallback';
import Use_Context from './Components/usecontext/Use_Context';
import UseDebugValue from './Components/UseDebugValue';
import UseDeferredValue from './Components/UseDeferredValue';
import Useeffect from './Components/Useeffect';
import UseId from './Components/UseId';
import Useimperativehandle from './Components/Useimperativehandle';
import UseInsertionEffect from './Components/UseInsertionEffect';
import UseLayoutEffect from './Components/UseLayoutEffect';
import UseMemo from './Components/UseMemo';
import UseReducer from './Components/UseReducer';
import Useref from './Components/Useref';
import UseState from './Components/UseState';
import UseSyncExternalStore from './Components/UseSyncExternalStore';
import UseTransition from './Components/UseTransition';




function App() {
  const callbackFn = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)
  }
  return (
    <div className="App">
      {/* <Comp />
      <Useref />
      <Useeffect />
      <UseState />
      <Use_Context />
      <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseReducer /> */}
      {/* <UseTransition /> */}
      {/* <UseActionState /> */}
      {/* <Useimperativehandle /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseDebugValue /> */}
      {/* <UseDeferredValue /> */}
      {/* <UseId /> */}
      {/* <UseSyncExternalStore /> */}
      {/* <UseInsertionEffect /> */}
      {/* <Profiler id='app' onRender={callbackFn}> */}
      {/* <Suspense fallback={<Comp />}>
      </Suspense> */}
      <Condition />

      {/* </Profiler> */}

    </div>
  );
}

export default App;
