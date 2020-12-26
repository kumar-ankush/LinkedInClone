import React,{useState,useEffect} from 'react';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import InputOption from '../InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../Post/Post';
import { db } from '../Firebase/Firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice/userSlice';
import FlipMove from "react-flip-move";
const Feed = () => {
    const [input,setInput]=useState('');
    const [posts,setPosts]=useState([]);
    const user=useSelector(selectUser);    
    
  //useeffect 1. Fire code when feeds load, 2. Fire component rerender if we dont pass second argument.But if we pass
    //second argument then it fire once when feed loads and never fire component rerender again after that
    useEffect(()=>{ //Whole database linked thing is defined here and its updating state then
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=> //Created Row time listerner to firebase and it will push a message then it will be mapped into state
            setPosts( //If post change it will go ahead and update it
                    snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data(),
                })) //In collection we have many docs 
            ));//Row time listernener connection to Database
    }, []);
    const sendPost=(e)=>{
        e.preventDefault();
        console.log("Prevent Working")
        db.collection("posts").add({
            name:user.displayName,
            description:user.email,
            message: input,
            photoURL:user.photoURL||user.email[0],
            timestamp:firebase.firestore.FieldValue.serverTimestamp(), //If we use servertimestamp, time will be same no matter of which country you belong no effect    
        })
        setInput('');
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e=>setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC1SE"/>
                </div>
            </div>

            {/* Posts */}
            <FlipMove>
            {posts.map(({id, data: { name,description,message,photoURL}})=>(
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoURL={photoURL}
            />))}
            </FlipMove>
            
            {/* <Post name="Ankush Kumar" description="This is a test" message="Wow its working"/> */}
        </div>
    );
}

export default Feed;
