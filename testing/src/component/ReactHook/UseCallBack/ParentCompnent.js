import React, { useCallback } from 'react'
import { useState } from 'react'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>IncrementAge</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>IncrementSalary</Button>
    </div>
  )
}

export default ParentComponent
