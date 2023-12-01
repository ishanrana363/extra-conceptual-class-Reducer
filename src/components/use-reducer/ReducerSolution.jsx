import {useReducer} from "react";
import {authReducer} from "./AuthReducer.js";
import {initialValue} from "./AuthValue.js";

const ReducerSolution = () => {

    const [state,dispatch] = useReducer(authReducer,initialValue)
    const submitValue = (e) => {
        e.preventDefault()
        console.log("state::",state)
    }
    const inputValueHandle = (e) => {
        const {name,value} = e.target;
        dispatch({
            key : name,
            value : value
        })
    }
    return (
        <div>
            <div className= 'container' >
                <div className= 'row p-5 ' >
                    <div className= "card  " >
                        <div className= "col-md-4 p-5 " >
                            <form>
                                <div>
                                    <p>
                                        Name :
                                        <input type= "text" name= "name"
                                               onChange={inputValueHandle}  />
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Email :
                                        <input type= "email" name= "email"
                                               onChange={inputValueHandle}/>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Mobile :
                                        <input type= "number" name= "mobile"
                                               onChange={inputValueHandle}/>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Country :
                                        <input type= "text" name= "country"
                                               onChange={inputValueHandle}/>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Age :
                                        <input type= "number" name= "age"
                                               onChange={inputValueHandle}/>
                                    </p>
                                </div>
                                <div>
                                    Profession :
                                    <input type= "text" name= "profession"
                                           onChange={inputValueHandle} />
                                </div>
                                <div className= "pt-3" >
                                    <button onClick={(e)=>submitValue(e)} className= "btn btn-success "
                                            type= "button" >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReducerSolution;



























