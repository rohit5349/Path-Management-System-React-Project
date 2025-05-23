import './page1.css'

function page1(){
     return(
        <div>
            <video autoPlay loop muted className="background-video">
               <source src='./video/UI.mp4' type="video/mp4" />
            </video>
         <div className="page_1">
              <h1 className="gradient-text">PATH.MANAGEMENT.SYSTEM</h1>
              <h2>NAVIGATING THE SHORTEST PATH</h2>
              <p>
                Explore More with PMS Time-Saving Routes
              </p>
         </div>   
        </div>    
     );
};

export default page1;