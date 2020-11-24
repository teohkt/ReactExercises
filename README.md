# ReactExercises 

## NPM used

### Node
Asynchronous event-driven JavaScript runtime

### axios
Promise based HTTP client for the browser and node.js. Able to download json from links.

### redux
Maintains the state of entire application into a single immutable object. New objects are created using actions and reducers

### react-redux
Official react bidning for redux

### redux-thunk
Middleware that allows you to write action creators that returns functions instead of just actions. These returned functions are automatically invoked. This was used for blogs within the action fetchUser which returned the function which searched for individual users. 

### react-router-dom
Used for routes

### lodash 
* ``_.memoize``: Remembers the result of the function returned, redeuces the need for constanly calling for an already known result
* ``_.map``: iterates through array and pulls just one property
* ``_.uniq``: finds just the unique values


## Setup
Create new app within workspace
  >npx create-react-app <name of project>
  >npm uninstall -g create-react-app
  >rm -rf /usr/local/bin/create-react-app

## redux-devtools-extensions
Used for debugging redux applications. need chrome/firefox extension, plus 
  > import { createStore, applyMiddleware, compose } from 'redux';  

  >const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  >const store = createStore(
  >    reducers,
  >    composeEnhancers(applyMiddleware())
  >);
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
  >);

Start react server
  >npm start


If you clone repo onto a new machine, you need to use the following to get all the dependencies on that machine.
  >npm install


If a process is running on a port that is not,
  >npx kill-port <port number>


Slimmed down version of create-react-app
  >npx nano-react-app my-app
