import React from "react";

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {input: ""};
    }

    updateInput= input => {
        this.setState({input});
    }

    handleAddTodo = () => {};

    render(){
        return (
            <div>
                <input onChange={e => this.updateInput(e.target.value)} value={this.state.input} />
                <button className="add-todo" onClick={this.handleAddTodo}>Add Todo</button>
            </div>
        );
    }
}

export default AddTodo;