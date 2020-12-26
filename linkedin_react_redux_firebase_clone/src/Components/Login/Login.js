import React ,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice/userSlice';
import { auth } from '../Firebase/Firebase';
import './Login.css';
const Login = () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const [profilePic,setProfilePic]=useState('');
    const dispatch=useDispatch();
    const register=()=>{
        if(!name){
            return alert("Please enter a FullName")
        }
        //Created on Backend
        auth.createUserWithEmailAndPassword(email,password).then(
            (userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name, //displayName & photoURL keys referred to firebase
                photoURL:profilePic
            })
            .then(()=>{
                dispatch(login({ //Dispatch Login Actions
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL:profilePic,
                }))
            })
        }).catch(error=>alert(error)) //For the Error
        
    };
    const LoginToApp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileURL:userAuth.user.photoURL
            }))
        }).catch(error=>alert(error))
        
    };
    return (
        <div className="login">
            <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt=""/>
            <form>
                 <input value={name} onChange={e=> setName(e.target.value)} placeholder="Full Name (Required if registering)" type="text"/>
                 {/* {name?(''):(<span>Name Not Entered</span>)} */}
                 <input value={profilePic} onChange={e=>setProfilePic(e.target.value)} placeholder="Profile Picture URL(Optional)" type="text"/>
                 {/* {profilePic?(''):(<span>Pic Not Entered</span>)} */}
                 <input value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email" type="email"/>
                 {/* {email?(''):(<span>Email Not Entered</span>)} */}
                 <input value={password} onChange={e=> setPassword(e.target.value)} placeholder="Password" type="password"/>
                 {/* {password?(''):(<span>Password Not Entered</span>)} */}
                 <button type="submit" onClick={LoginToApp}>Sign In</button>                
            </form>
            <p>Not a Member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    );
}

export default Login;
