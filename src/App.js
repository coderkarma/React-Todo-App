import React, { Component } from 'react';
// import Input from '../components/Input';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      lists: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.deleteList = this.deleteList.bind(this);
  }

  handleSubmit(e) {
    // get the state and concat the value
    this.setState({
      lists: this.state.lists.concat({
        value: this.state.value,
        isEditing: false,
        isDone: false
      }),
      value: ''
    });
  }
  // updating the state
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  // deleting the list item
  deleteList(idx) {
    let currentList = this.state.lists.slice();

    currentList.splice(idx, 1);

    this.setState({
      lists: currentList
    });
  }

  // cross out the words if users clicks done button
  doneButton(idx) {
    let currentList = this.state.lists.slice();

    currentList[idx].isDone = !currentList[idx].isDone;

    this.setState({
      lists: currentList
    });
  }
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        {/* //<pre>{JSON.stringify(this.state, null, 4)}</pre> */}
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>

        <ul>
          {this.state.lists.map((list, idx) => {
            const spanStyle = {
              textDecoration: list.isDone ? 'line-through' : ''
            };
            return (
              <li key={idx}>
                <span style={spanStyle}>{list.value}</span>

                {/* //{list.isDone.toString()} */}
                {/* {list.isDone.toString()}|
                {list.isEditing.toString()} */}
                <button onClick={() => this.deleteList(idx)}>Delete</button>
                <button onClick={() => this.doneButton(idx)}>Done</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
