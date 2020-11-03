// Action Creator -> Action -> dispatch      -> Reducers    -> State
// Drop off form  -> Form   -> Form receiver -> Departments -> Compiled Department Data

// all code done on codepen where redux dependency was already installed

console.clear();

// People dropping off a form (Action Creators)

const createPolicy = (name, amount) => {
  return { // Action (a form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoney) => {
    return {
      type: 'CREATE_CLAIM',
      payload: {
        name: name,
        amountOfMoney: amountOfMoney 
      }
    };
  };

// Reducers (Departments)
const claimsHistory = (oldList = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        // ... is creating a new array, whereas .push() is modifying an existing one
        return [...oldList, action.payload];
    }

    return oldList;
}

const accounting = (currentMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM'){
        return currentMoney - action.payload.amountOfMoney;
    } else if (action.type === 'CREATE_POLICY'){
        return currentMoney + action.payload.amount;
    }

    return currentMoney;
};

const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name!==action.payload.name);
    }

    return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers ({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);


// Passed on the action to the other departments
store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jack', 30));
store.dispatch(createPolicy('Ben', 40));

store.dispatch(createClaim('Alex', 100));
store.dispatch(createClaim('Alex', 50));

store.dispatch(deletePolicy('Ben'));
// get access to all the info
console.log(store.getState());