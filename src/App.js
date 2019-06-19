import React, { Component } from 'react';
import List from './components/List';
import {connect} from 'react-redux';
import * as actionTypes from './actions/actions'


class App extends Component {
 

handleLoad = () =>{
    console.log(this.props.LoadMore())
}


    render() {
        console.log(this.props)
        const {persons} = this.props;
       
        return (
            <div>
                { persons.name.slice(0,this.props.metaData).map((personName,index)=>
                    
                    <List 
                    name={personName}
                    key={index}                    
                    />
                )
                    

                }
                <button onClick={this.handleLoad} className="text-center btn btn-primary">Load More</button>
            </div>
        )
    }
}




export const mapStateToProps = (state) => {
    return {
       persons : state.Persons,
       metaData : state.limit
    };
}

export const mapDispatchToProps = dispatch => {
   
    return {

        LoadMore : () => dispatch(actionTypes.LoadMoreItems()),    
        Loader   : () => dispatch (actionTypes.LoadingScreen())
        
       
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(App)
