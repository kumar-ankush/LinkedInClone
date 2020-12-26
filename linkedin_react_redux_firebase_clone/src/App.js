import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './Components/Feed/Feed';
import { auth } from './Components/Firebase/Firebase';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import SideBar from './Components/SideBar/SideBar';
import { login, logout, selectUser } from './features/userSlice/userSlice';

function App() {
  const dispatch=useDispatch();
  const user= useSelector(selectUser);
  useEffect(()=>{
      auth.onAuthStateChanged(userAuth =>{
        if(userAuth){
          //user is logged in
          dispatch(login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoURl:userAuth.photoURL,
          }))
        }
        else{
          //user logged out
          dispatch(logout())
        }
      })
  },[])
  return (
    // The Whole App is made by Ankush Kumar in 4 days
    <div className="app">
     
      {/* Header */}
      <Header />
      {!user?
      (<Login />):
      (
        <div className="app__body">
        <SideBar name="Ankush Kumar" email="ankush-kumar@outlook.com" stat__Number="3456" stat__Post="6798"/>
        {/* Sidebar */}
        <Feed />
        {/* Feed */}
        {/* Widgets */}
      </div>
      )
      }
      {/* App Body */}
         
      
    </div>
  );
}

export default App;
