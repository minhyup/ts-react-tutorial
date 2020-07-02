import React, { useReducer, useContext, createContext, Dispatch } from 'react';

// 타입 선언
type Color = 'red' | 'orange' | 'yellow';

// 상태를 위한 타입
type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action = { type: 'SET_COUNT'; count: number } | { type: 'SET_TEXT'; text: string } | { type: 'SET_COLOR'; color: Color } | { type: 'TOGGLE_GOOD' };

// 디스패치를 위한 타입
type SampleDispatch = Dispatch<Action>;

// Context 만들기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

// 리듀서
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count // count가 자동완성되며, number 타입인걸 알 수 있습니다.
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text // text가 자동완성되며, string 타입인걸 알 수 있습니다.
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color // color 가 자동완성되며 color 가 Color 타입인걸 알 수 있습니다.
      };
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood
      };
    default:
      throw new Error('Unhandled action');
  }
}

// SampleProvider 에서 useReducer를 사용
// SampleStateContext.Provider 와 SampleDispatchContext.Provider로 children을 감싸서 반환
export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>{children}</SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

// state 얻기 위한 커스텀 훅
export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find SampleProvider');

  return state;
}

// dispatch를 얻기 위한 커스텀 훅
export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}

// function SampleContext() {
//   return (
//     <div>
//       <div>1</div>
//     </div>
//   );
// }

// export default SampleContext;
