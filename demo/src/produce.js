import React, { Component } from 'react';
import produce from 'immer';
import { normalize, schema } from 'normalizr'

class User extends Component {
    state = {
        user: {
            name: 'amit',
            age: 22
        }
    }
    onBirthDayClick1 = () => {
        this.setState({
            user: {
                ...this.state.user,
                age: this.state.user.age + 1
            }
        })
    }
    onBirthDayClick2 = () => {
        this.setState(produce(this.state, draft => {
            draft.user.age += 1
        }))
    }
    onBirthDayClick3 = () => {
        this.setState(produce(draft => {
            draft.user.age += 1
        }))
    }




    render() {
        const myData = { users: [{ id: 1 , name:{firstName:'amit' , lastName:'aslia'} }, { id: 2 } , {id:4}] };
        // console.log(Object.values(myData))
        const user = new schema.Entity('users');
        // console.log(user)
        const mySchema = { users: [user] };
        // console.log(mySchema)
        const normalizedData = normalize(myData, mySchema);
        console.log(normalizedData)
        return (
            <div>
                Name: {this.state.user.name}
                <br />
                Age: {this.state.user.age}
                <br />
                <button onClick={this.onBirthDayClick1}>onBirthdayClick1</button>
                <button onClick={this.onBirthDayClick2}>onBirthdayClick2</button>
                <button onClick={this.onBirthDayClick3}>onBirthdayClick3</button>
                <button onClick={this.onBirthDayClick4}>onBirthdayClick4</button>
            </div>
        );
    }
}

export default User;