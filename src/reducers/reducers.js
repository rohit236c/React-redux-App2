import * as actionTypes from '../actions/actions'


const initialState = {
    Persons: {
        name: [
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry",
        "harry","harry","harry","harry"
        ],
        isfetching: false,
        isError: false
    },
    limit : 10 
}

const reducers = (state = initialState, action) => {
  
    switch(action.type){

        case actionTypes.LoadMore :{
            const newLimit = state.limit + 10;
            return {
                ...state,
                limit:newLimit
            }           
        }
        case actionTypes.Loader :{
            console.log("loading")
            return {
                ...state,
                Persons:{name:state.Persons.name,isfetching:true,isError:false}
            }
        }

        default:
        return state ;
    
    }



}

export default reducers ;