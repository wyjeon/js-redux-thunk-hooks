// 액션 타입
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성함수
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

export const increaseAsync = () => dispatch => {
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => dispatch => {
  setTimeout(() => dispatch(decrease()), 1000);
};

// 초기상태
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
