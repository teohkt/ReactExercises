// all code done on codepen where redux dependency was already installed

console.clear();

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
        return currentMoney + action.payload.amountOfMoney;
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