import React from 'react'
import Child1 from './componentprops/Child1'

function AppProps() {
const studentdata={
    name:"Rahul Kumar",
    branch:"AIML",
    section:"B",
    college:"ABES Engineering College"
}

  return (
    <div>AppProps
        <Child1 child1data={studentdata} />
    </div>
  )
}

export default AppProps