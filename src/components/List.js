import React, { Component } from 'react'

 class List extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
               <li>{this.props.name}</li>
            </div>
        )
    }
}

export default List
