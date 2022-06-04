const userStorage = typeof window !== 'undefined' ? localStorage.getItem('persist:user') : null
const user = userStorage ? JSON.parse(userStorage) : null

const initialState = {
  userName: user?.userName || ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDUSER":
      return { ...state, userName: action.userName };
    case 'CLEARUSER':
      return { ...state, userName: '' };
    default:
      return { ...state };
  }
};

export default userReducer
