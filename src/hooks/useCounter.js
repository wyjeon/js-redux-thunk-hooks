import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAsync, increaseAsync } from '../modules/count';

function CounterContainer() {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increaseAsync()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decreaseAsync()), [dispatch]);

  return {
    number,
    onIncrease,
    onDecrease,
  };
}

export default CounterContainer;
