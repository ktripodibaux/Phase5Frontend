
import { useEffect, useState } from 'react';
import './App.css';
import Mainpage from './components/Mainpage';
import ReactDOM from "react-dom/client";
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import Login from './components/Login';
import ChatPage from './components/ChatPage';
import FriendsPage from './components/FriendsPage';
import FriendRequestPage from './components/FriendRequestsPage';
import PostsPage from './components/PostsPage';
import ProfilePage from './components/ProfilePage';

function App() {

  const[currentUser, setCurrentUser] = useState(undefined)
  const [requests, setRequests] = useState(undefined)

  console.log(requests)

  // fetchRequests()

  function fetchRequests(user){
    if (user){
      fetch(`http://localhost:3000/users_requests/${user.id}`).then(res=>res.json()).then(data=>{setRequests(data)
      console.log(data)
    })
  }
    else if (currentUser){
      fetch(`http://localhost:3000/users_requests/${currentUser.id}`).then(res=>res.json()).then(data=>{setRequests(data)
      // console.log("request fetch ",data)
    })
  }
    }

    function removeRequestCard(request){
      const newArray = requests.filter(card=>{
          return card != request
      })
      setRequests(newArray)
  }
    

  function handleNewUser(user){
    // console.log(user)
    setCurrentUser(user)
    if(user != undefined){
      fetchRequests(user)
    }
  }


  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage requests={requests} user={currentUser} />}>
          <Route path='/' element={<Login currentUser={currentUser} handleNewUser={handleNewUser} />} />
          <Route path="/posts" element={<PostsPage user={currentUser}/>} />
          <Route path="/chat" element={<ChatPage user={currentUser} />} />
          <Route path='/friends' element={<FriendsPage user={currentUser} />} />
          <Route path="/requests" element={<FriendRequestPage removeRequest={removeRequestCard} requests={requests} user={currentUser} />} />
          <Route path='/profile' element={<ProfilePage handleNewUser={handleNewUser} user={currentUser} />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;