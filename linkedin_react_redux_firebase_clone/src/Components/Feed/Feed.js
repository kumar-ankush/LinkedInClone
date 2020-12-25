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
const Feed = () => {
    const [input,setInput]=useState('');
    const [posts,setPosts]=useState([]);
    
    
    useEffect(()=>{ 
        db.collection("posts").onSnapshot((snapshot)=> 
            setPosts( 
                    snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data(),
                }))
            ));
    }, []);
    const sendPost=(e)=>{
        e.preventDefault();
        console.log("Prevent Working")
        db.collection("posts").add({
            name:"Ankush Kumar",
            description:"Testing feed Continues",
            message: input,
            photoURL:"",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(), 
        })
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
            {posts.map(({id, data: { name,description,message,photoURL}})=>(
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoURL={photoURL}
            />))}
            {/* <Post name="Ankush Kumar" description="This is a test" message="Wow its working"/> */}
        </div>
    );
}

export default Feed;
