import { Outlet } from 'react-router-dom';
import ChatsContainer from './ChatsContainer';
import Header from './Header';
import Login from './Login';
import Test from './test';

function Mainpage({user, requests}){

    // console.log(requests)

    return(
        <>
        {/* <h1>{user ? user.username : null}</h1> */}
            <Header user={user} requests={requests} />
        <div className='container'>
            {/* <Login /> */}
            {/* <ChatsContainer /> */}
            {/* <Test user={user} /> */}
            <Outlet />
        
        </div>
        </>
    )
}

export default Mainpage