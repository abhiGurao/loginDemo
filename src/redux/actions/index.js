export const USER_NAME = 'username';
export const PASSWORD = 'password';
export const LOGIN = 'login';

export const ADD_ROW = 'add_row';
export const DELETE_ROW = 'delete_row';
export const UPDATE_ROW = 'update_row';

export function username(value) {
  return {
    type: USER_NAME,
    payload: {
      value
    }
  };
}
export function password(value) {
  return {
    type: PASSWORD,
    payload: {
      value
    }
  };
}

export function login(value1, value2) {
   return (dispatch, getState) => {
     const state  = getState();
     const loginData = state.login;
     let validation = loginData.dataValidation;
     let errorPopup = loginData.errorPopup;
    if(value1 === loginData.username[0] && value2 === loginData.password[0]){
        validation = true;

    }else{
      alert('Invalid ID or password. Please try again.');
      errorPopup = true;
    }
    dispatch({
      type: LOGIN,
      payload: {
        validation
      }
    });
  }
}

export function deleteRows(rowIds) {
  return (dispatch, getState) => {
    const state  = getState();
    const { productData } = state;
    let productDataUpdate = JSON.parse(JSON.stringify(productData));
    for (var i = rowIds.length -1; i >= 0; i--) {
      productDataUpdate.splice(rowIds[i],1);
    }
    dispatch({
      type: DELETE_ROW,
      payload: {
        value : productDataUpdate
      }
    });
  }
}

export function addRow(rowData) {
  return {
    type: ADD_ROW,
    payload: {
      value : rowData
    }
  };
}

export function updateRow(row) {
  return (dispatch, getState) => {
    const state  = getState();
    const { productData } = state;
    const updateIndex = productData.findIndex((obj) => {
      if(obj.id == row.id) {
          return obj;
      }
    });
    dispatch({
      type: UPDATE_ROW,
      payload: {
        value : row,
        index : updateIndex
      }
    });
  }
}
