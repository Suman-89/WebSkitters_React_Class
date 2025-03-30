import { useState } from 'react'
import './App.css'
import Index from './pages'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import Home from './pages/todo/home';
import AgGrid from './pages/todo/agGrid';

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {

  return (
    <>
    {/* <Index/> */}
    {/* <Home/> */}
    <AgGrid/>
    </>
  )
}

export default App
