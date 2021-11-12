import React, { useState } from "react";
import ValueProvider from './ValueContext';
import CounterDemoWithContext from './CounterDemoWithContext'

const ContextDemo = () => {
  const data = {total:0, count:0, log:[]}

  return (
    <ValueProvider value={data}>
        <CounterDemoWithContext />
    </ValueProvider>
  )
}

export default ContextDemo