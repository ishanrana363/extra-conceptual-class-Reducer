import {useState} from "react";

const ReducerProblem = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [country, setCountry] = useState('');
    const [age, setAge] = useState(0);
    const [profession, setProfession] = useState('');
    return (
        <div className= 'container' >
            <div className= 'row p-5 ' >
                <div className= "card  " >
                    <div className= "col-md-4 p-5 " >
                        <form>
                            <div>
                                <p>
                                    Name :
                                    <input type= "text" />
                                </p>
                            </div>
                            <div>
                                <p>
                                    Email :
                                    <input type= "email" />
                                </p>
                            </div>
                            <div>
                                <p>
                                    Mobile :
                                    <input type= "number" />
                                </p>
                            </div>
                            <div>
                                <p>
                                    Country :
                                    <input type= "text" />
                                </p>
                            </div>
                            <div>
                                <p>
                                    Age :
                                    <input type= "number" />
                                </p>
                            </div>
                            <div>
                                Profession :
                                <input type= "text" />
                            </div>
                            <div className= "pt-3" >
                                <button className= "btn btn-success " type= "button" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReducerProblem;




























