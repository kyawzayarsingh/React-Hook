import React from 'react'
import './App.css'
import Counter from './component/ClassComponent/count'
import { Greet } from './component/FunctionalComponent/Greet'
import DataFetching from './component/ReactHook/DataFetchingPart1'
import DataFetchingPart2 from './component/ReactHook/DataFetchingPart2'
import DataFetchingPart3 from './component/ReactHook/DataFetchingPart3'
import HookCounter from './component/ReactHook/HookCounter'
import HookCounterFour from './component/ReactHook/HookCounterFour'
import HookCounterThree from './component/ReactHook/HookCounterThree'
import HookCounterTwo from './component/ReactHook/HookCounterTwo'
import HookCounterUseEffect from './component/ReactHook/HookCounterUseEffect'
import IntervalHookCounter from './component/ReactHook/IntervalHookCounter'
import ComponentA from './component/ReactHook/UseContext/ComponentA'
import CounterThree from './component/ReactHook/UseReducer/CounterThree'
import TT from './tt'

export const UserContext = React.createContext() // we are going to use this to componentD
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is React</h1>
        <TT />
        <Counter />
        <Greet />
        <HookCounter />
        <HookCounterTwo />
        <HookCounterThree />
        <HookCounterFour />
        <HookCounterUseEffect />
        <IntervalHookCounter />
        <DataFetching />
        <DataFetchingPart2 />
        <DataFetchingPart3 />
        {/* user only one context */}
        {/* <UserContext.Provider value={'Kyaw Zayar Win'}>
          <ComponentA />
        </UserContext.Provider> */}

        <UserContext.Provider value={'Kyaw Zayar Win'}>
          <ChannelContext.Provider value={'Roll-64'}>
            <ComponentA />
          </ChannelContext.Provider>
        </UserContext.Provider>

        <CounterThree />
      </header>
    </div>
  )
}

export default App
