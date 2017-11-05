import initState from './init_state';
import { USER_NAME, PASSWORD, LOGIN, ADD_ROW, DELETE_ROW, UPDATE_ROW } from '../actions/index.js';

// experiment reducer
export default function(state=initState, action = {}) {
  let newState = state;
  switch(action.type) {
	  case USER_NAME : {
		  newState = { ...state };
		  newState.login.username1 = action.payload.value;
		  break;
		}
	  case PASSWORD : {
		  newState = { ...state };
		  newState.login.password1 = action.payload.value;
		  break;
		}
	  case LOGIN : {
		  newState = { ...state };
		  newState.login.dataValidation = action.payload.validation;
		  break;
		}
    case DELETE_ROW:
      newState = { ...state };
      newState.employeeData = action.payload.value;
      break;
    case ADD_ROW:
     newState = { ...state };
     newState.employeeData.push(action.payload.value);
    break;
    case UPDATE_ROW:
    newState = { ...state };
    newState.employeeData[action.payload.index] = action.payload.value;
      break;
		default:
		break;
  }
  // console.log(newState);
	return newState;
}
