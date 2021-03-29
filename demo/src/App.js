import React, { Component } from 'react';
import ParentComponent from './components/parentCount';
import Common from './tabs/index';
import DynamicForm from './form/DynamicForm';
import Basic from './form/basic'
class App extends Component {
  render() {
    return (
      <div>
        {/* <DynamicForm fields={[{name: 'email', type: 'text', value: 'amit', label: 'HHello', placeholder: 'Jaa nikal'}]} /> */}
        <Common />
      </div>
    );
  }
}

export default App;