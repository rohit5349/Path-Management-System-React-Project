import './Navigation.css';
import { Link , useNavigate , useLocation} from 'react-router-dom';
import React , {useState , useEffect, useRef} from 'react';
import MainPage from '../../MainPage/MainPage.jsx';


const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/'
  const [currentImageIndex , setCurrenImageIndex] = useState(0);
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const [isDropdownOpen , setIsDropdownOpen] = useState(false);
  const [userName , setUserName] = useState('');

 const images = [
     'images/Delhi_Gate.jpg',
     'images/DelhiFort.jpg',
     'images/Mumbai_Gate.jpg',
     'images/QutubMinar.jpg',
     'images/south-temple.jpg',
     'images/TajHotel.jpg',
     'images/TajMahal.jpg',
     'images/Travel.jpg',
     'images/varanasiGhat.jpg',
 ];


 useEffect(()=>{
   const interval = setInterval(() =>{
         setCurrenImageIndex((prevIndex) => (prevIndex + 1)%images.length);
   } , 3000);

   return () => clearInterval(interval);

 },[images.length])

useEffect(()=>{
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const name = localStorage.getItem('username') || '';
    setIsLoggedIn(loggedIn);
    setUserName(name);
} , [])

 const handleProfileClick = ()=>{
     setIsDropdownOpen(!isDropdownOpen);
 }


 const handleLoginClick = ()=>{
       if(!isLoggedIn){
         navigate('/Login', { state : {from: location.pathname}});
       }
       else{
        setIsDropdownOpen(!isDropdownOpen);
       }
 } 

 const handleLogout = ()=>{
     setIsLoggedIn(false);
     localStorage.setItem('isLoggedIn' , 'false');
      localStorage.removeItem('username');
     setIsDropdownOpen(false);
     navigate('/');
 }
 
  return (
     <div>
         <div className="navigation_fullscreen">
         <img
           src = {images[currentImageIndex]}
           alt='Travel'
           className='fullscreen_image'
         />
  
         <div  className="navi">
           <img src="/images/map.png" alt="Map Logo" />
              <div className='txt'>
                <h4><Link to="/contact">Best Route</Link></h4>
                <h4><Link to="https://hotel-booking-fronted.vercel.app/">Hotel Booking</Link></h4>
                <h4><Link to="/chatbot">Help Us</Link></h4>
              </div>
         </div>
          <div className="profile-dropdown">
              <div
                className='profile-icon'
                onClick={handleProfileClick}
              >
                 👤
              </div>

              {isDropdownOpen && (
                 <div className="dropdown-menu">
                    {!isLoggedIn ?(
                       <button 
                         className="dropdown-item"
                         onClick={handleLoginClick}
                        >
                          Login
                       </button>
                    ):(
                      <>
                      <div className="dropdown-item">Hi, {userName}</div>
                     <div className="profile-logout">
                       <div className="profile-part">
                         <img src="images/profile.png" alt="" />
                           <button
                             className='dropdown-item'
                             onClick={()=> alert("Profile clicked")}
                           >
                             Profile
                           </button>
                       </div>

                         <div className="logout-part">
                           <img src="images/logout.png" alt="" />
                            <button 
                                className="dropdown-item"
                                onClick={handleLogout}
                              >
                                 Logout
                             </button>
                         </div>
                      </div>
                      </>
                    )}
                 </div>
              )}
          </div>
      </div>
     </div>
  );
};

export default Navigation;
