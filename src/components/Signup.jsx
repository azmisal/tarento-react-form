import React,{useState} from 'react';
import "./Signup.css"
const Signup =()=>{

    const [pass , setPass] = useState(false);
    const [formData , setData] = useState({
        userName: "",
        email:"",
        password : ""
    })
    
    function showPassword(){
        setPass(!pass)
    }
    const handleSubmit = () =>{
        alert("User data : \n UserName : " + formData.userName+ "\nEmail : " + formData.email + "\nPassword : " +formData.password);
    }

    function handleChange(e){
        setData({...formData, [e.target.name] : e.target.value});
    }
return (
    <div className="signup">
        <div className="box">
            <h1 className='signupHead'>Signup</h1>
            <div className="formInputs">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='userName' name='userName' value={formData.userName}  onChange={handleChange}/>
                    <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange}/>
                    <input type={pass? "text" : "password"} placeholder='Password' name='password' value={formData.password} onChange={handleChange}/>
                    <label >
                        <input type="checkbox" checked={pass} onChange={showPassword}/>
                        Show Password
                    </label>
                    <div className="buttons">
                        <button className="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

}

export default Signup;