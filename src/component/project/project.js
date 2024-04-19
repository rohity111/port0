import './project.css';
import PROJECT1 from '../images/blog.png';
import crud from '../images/crud.png';
import music from '../images/music.png';
import weather from '../images/weather.png';
import foodwind from '../images/medical.png';
import anujwrites from '../images/blog1.jpg';
import roomrpaid from '../images/image.png';
import { useEffect } from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
function Project() {
    useEffect(() => {
        AOS.init({duration:1000});
        
      }, []);
    return (
        <>
            <div className='project-container' id='project12'>
                <h1 className='c1-h1'> PROJECTS</h1>


 <div className='p-p1'>
                    <div className='p-p1left' >

                        <h1 className='h1'><a href='https://i-heaven1.netlify.app/'>1.Image Storing  Website </a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in">This is a frontend based website.This is design using through Html,CSS,and Js. 
                            This is very usefull for image gallery.This website you can use for image store and delete. </p>
                    </div>
                    <div className='p-p11right' >
                        <img src={roomrpaid} data-aos="zoom-in"></img>
                    </div>

                </div>

                <div className='p-p1'>
                    <div className='p-p1left' >

                        <h1 className='h1'><a href='https://medical-1.netlify.app/'>2.Medical Website </a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in"> This is a medical website.You can know all about medicine.This website desisn using throgh html,css,js,jequery and php. </p>
                    </div>
                    <div className='p-p11right' >
                        <img src={foodwind} data-aos="zoom-in"></img>
                    </div>

                </div>
                <div className='p-p1'>
                    <div className='p-p1left' >

                        <h1 className='h1'><a href=''>3.Latest Blog Website </a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in">  Conceptualized, designed and developed a MERN stack website to enable users to post their blog with
                            image, title and description. </p>
                    </div>
                    <div className='p-p11right' >
                        <img src={anujwrites} data-aos="zoom-in"></img>
                    </div>

                </div>


        
                <div className='p-p1'>
                    <div className='p-p1left' >
                   
                        <h1 className='h1'><a href='https://rohityadav008.wordpress.com/'>4.Blog Website </a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in">In this Project technology used only wordpress. User can create their Blog and there is search functionality
                         in this application. </p>
                    </div>
                    <div className='p-p11right' >
                        <img  src={PROJECT1} data-aos="zoom-in"></img>
                    </div>

                </div>



                <div className='p-p1'>
                    <div className='p-p1left' >
                        <h1 className='h1'><a href='https://mycrudapplication.netlify.app/'>5.CRUD Application </a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in">This is complete MERN Project. View button by the help of this button users
can see their detail in other page.</p>
<p className='s-p1' data-aos="zoom-in"> At that page there is download button by the help of this users can download their information in the form of pdf.</p>
                    </div>
                    <div className='p-p11right' >
                        <img src={crud} data-aos="zoom-in" ></img>
                    </div>
                </div>




                <div className='p-p1'>
                    <div className='p-p1left' >
                        <h1 className='h1'><a href='https://anujkumar-weather.netlify.app/'>6.Weather Application</a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in">In this Project the technology used Only React JS. Users can serach the live temperature of any city. In search bar make sure that the first letter must be capital.</p>
                    </div>
                    <div className='p-p11right' >
                        <img src={weather} data-aos="zoom-in"></img>
                    </div>
                </div>




                <div className='p-p1'>
                    <div className='p-p1left' >
                        <h1 className='h1'> <a href='https://song-11.netlify.app/'>7.Music Website </a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in">In this Project the Technology used Html ,CSS and Js. Songs and their images not dynamic.</p>
                    </div>
                    <div className='p-p11right' >
                        <img src={music} data-aos="zoom-in"></img>
                    </div>
                </div>


            </div>
        </>
    )

}
export default Project;
