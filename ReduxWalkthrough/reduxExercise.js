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
  