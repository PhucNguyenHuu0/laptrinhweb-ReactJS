import React, { Component } from 'react';

class NHP_EventForm4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Nguyễn Hữu  Phúc",
        }
    }

    handleGetName = ()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Lấy dữ liệu từ props</h2>
                <button onClick={this.handleGetName}>Lấy tên</button>
                <h2>Welcome to , {this.state.name}</h2>
            </div>
        );
    }
}

export default NHP_EventForm4;