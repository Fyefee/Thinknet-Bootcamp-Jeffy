const userStorage = typeof window !== 'undefined' ? localStorage.getItem('persist:user') : null
const user = userStorage ? JSON.parse(userStorage) : null

const initialState = {
  result: {}
}

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDRESULT":
      return { ...state, result: addResult(state, action.questionId, action.answerId) };
    case 'CLEARRESULT':
      return { ...state, result: {} };
    default:
      return { ...state };
  }
};

const addResult = (state, questionId, answerId) => {
    const resultMap = new Map(Object.entries(state.result));
    resultMap.set(questionId, answerId)

    const resultObj = Object.fromEntries(resultMap);
    return resultObj
}

export default questionReducer
