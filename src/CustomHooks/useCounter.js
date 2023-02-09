import { useState, useEffect } from 'react';


function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const resetCounter = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    console.log('componentName');
  })

  return resetCounter;

}


function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect((url) => {
    fetch(url).then(res => res.json()).then((data) => setData(data))
  })
  return data;
}

export default useCounter;
