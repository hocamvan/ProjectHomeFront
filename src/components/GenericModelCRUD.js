import React, { Component } from 'react';

export default class GenericModelCRUD extends Component {

    constructor(props) {
        super(props);
        const model = props.model;
        this.state = { ...model };
        this.state.mappings = props.mappings;
        this.state.table = props.table;
    }

    handleCreate = (e) => {
        e.preventDefault();
        const bodyJson = {};
        this.state.mappings.forEach(element => {
            bodyJson[element.name] = this.state[element.name];
        });
        const body = JSON.stringify(bodyJson);
        const route = "http://localhost:3030/api/" + this.state.table;
        fetch(route, {
            method: 'post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: body
        })
            .then((response) => response.json())
            .then((responseJson) => {
                alert(responseJson.insertId);

            })
            .catch((error) => {
                console.error(error);
            });
    }
    handleSave = (e) => {
        e.preventDefault();
    }
    handleDelete = (e) => {
        e.preventDefault();
    }

    handleReset = (e) => {
        e.preventDefault();
    }


    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    renderButtons() {
        if (this.state.id === undefined) {
            return (<button value="Create" onClick={this.handleCreate} >Create</button>);
        } else {
            return (
                <div>
                    <button value="Save" onClick={this.handleSave} >Save</button>
                    <button value="Delete" onClick={this.handleDelete} >Delete</button>
                </div>
            );
        }
    }
    render() {
        return (<div>
            <form>
                {this.state.mappings.map(element => {
                    return (

                        <label key={element.name} >
                            {element.name}:
                        <input value={this.state[element.name]} type={element.type}
                                placeholder={element.name} onChange={this.handleOnChange}
                                name={element.name} />
                        </label>

                    )
                }
                )}
                <div>
                    <button onClick={this.handleReset} >Reset</button>
                    {this.renderButtons()}
                </div>
            </form>
        </div>);
    }

}