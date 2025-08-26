import React, {useEffect, useState} from 'react'

function Counter() {
	// console.log('Component mounted');
	const [count, setCount] = useState(0)
	useEffect(() => {
		console.log('Component mounted');
		return () =>{
			console.log("ddds")
		}
  }, []);
	useEffect(() => {
		console.log('The value of count has changed:', count);
	}, [count]); // Will only be executed when count has changed

	

	const handleCount = () =>{
		setCount(count + 1)
  }
  return (
	<div>            
		<button onClick={handleCount}>increment count</button>
	</div>

  );
}

export default Counter;
