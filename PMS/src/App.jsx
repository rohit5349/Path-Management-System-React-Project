import './App.css';
import Navigation from './assets/Navigation/Navigation.jsx'
import Page1 from './assets/component/page1/page1.jsx'
import Page2 from './assets/component/page2/page2.jsx'
import Login from './Login/Login.jsx'
import Contact from './contact/contact.jsx'
import Chatbot from './chatbot/chatbot.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Result from './Result/Result.jsx'
import Firstpage from './assets/component/FirstPage/Firstpage.jsx';
import { useEffect, useState } from 'react';

function App(){
     const [showMainContent , setShowMainContent] = useState(false);
     useEffect(()=>{
        const timer =   setTimeout(()=>{
                setShowMainContent(true);
          } , 3000);    
          
          return ()=>clearTimeout(timer);
     },[]);
     return(
         <Router>
            <div>
                 <Routes>
                     <Route path='/' element=
                        {
                         <>
                         {/*Render the FirstPage first*/}
                         {!showMainContent && <Firstpage/>}
                         {/*Render the Main content when ready*/}
                         {showMainContent && <FirstPagewithContent/>}
                         </>
                         } 
                       />
                     <Route path='/login' element={<Login/>} />
                     <Route path='/contact' element = {<Contact/>} />
                     <Route path='/result' element = {<Result/>} />
                     <Route path='/chatbot' element = {<Chatbot/>}/>
                 </Routes>
            </div>
           
         </Router>
     );
};


function FirstPagewithContent(){
      return(
          
          <div className='mainPage'>
            <Navigation/>
          <div className="main">
               <Page1/>
               <Page2/>
          </div>
          <div className="images">
               <img src="./images/image1.png" alt="" />
               <img src='./images/middlePage.png' className='middle'/>
               <img src="./images/image2.png" className='img2' alt="" />
          </div>
            
            <footer className="footer">
               <div className="footer-content">

                    <div className="contact-info">
                      <h3>Contact Us</h3>
                      <p>Email: rohitsinghmaurya20@gmail.com</p>
                      <p>Phone: +91 - 7007839424</p>
                    </div>

                    <div className="social-links">
                        <h3>Follow Us</h3>

                        <div className='instagram'>
                          <img src="./images/instagram.png" alt="" />
                          <a href='https://www.instagram.com/r_s_m87/' target='_blank' rel='noopener noreferrer'>
                             Instagram
                          </a>
                        </div>

                        <div className='facebook'>
                          <img src="./images/facebook.png" alt="" />
                          <a href='https://www.facebook.com/share/1AAwkUqGNC/' target='_blank' rel='noopener noreferrer'>
                             Facebook
                          </a>
                        </div>

                        <div className='github'>
                          <img src="./images/github.png" alt="" />
                          <a href='https://github.com/rohit5349' target='_blank' rel='noopener noreferrer'>
                             GitHub
                          </a>
                        </div>
                      
                      <div className='linkdin'>
                         <img src="./images/linkdin.png" alt="" />
                        <a href='https://www.linkedin.com/in/rohit5349/' target='_blank' rel='noopener noreferrer'>
                           Linkdin
                        </a>
                      </div>

                    </div>
               </div>
            </footer>
        </div>
      );
};

export default App;
