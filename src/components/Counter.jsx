import React, {useEffect, useState} from 'react'

function Counter() {
	const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // очистка: убираем таймер
    return () => clearInterval(interval);
  }, []);
  return (
	<div>  
		 <p>Прошло секунд: {seconds}</p>         
	</div>

  );
}

export default Counter;
