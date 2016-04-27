import { combineReducers } from 'redux';
import usersReducer from './users';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;


// React

import React, { Component } from 'react';

export default class SpecialBtn extends Component {
  render() {
    return (
      <div>
        <button className="btn">Submit</button>
      </div>
    );
  }
}