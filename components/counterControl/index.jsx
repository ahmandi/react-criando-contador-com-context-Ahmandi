import { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

function CounterControls() {
	const { aumentar, diminuir } = useContext(CounterContext);

	return (
		<div>
			<button onClick={aumentar}>+</button>
			<button onClick={diminuir}>-</button>
		</div>
	);
}

export default CounterControls;
