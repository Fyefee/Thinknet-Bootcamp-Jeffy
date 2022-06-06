const questionStorage = typeof window !== 'undefined' ? localStorage.getItem('persist:question') : null
const question = questionStorage ? JSON.parse(questionStorage) : null

const initialState = {
  result: question?.result || {},
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
