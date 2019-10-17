export default function(state = {}, action){
    switch(action.type){
                case "STORE_DATA":
                    return{
                        ...state,
                         gameList: state.gameList.concat(action.payload)
                    }
                    
                  
                    case "FILTER_NAV":
                      return{
                          ...state,
                          filter: action.payload
                      }
            default:
                    return state;               
    };
}