import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => { };

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter)

  const incrementCounterHandler = () => {
    dispatch({ type: 'increament' })
  }

  const decrementCounterHandler = () => {
    dispatch({ type: 'decreament' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementCounterHandler}>Decreament</button>
        <button onClick={incrementCounterHandler}>Increament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
