import React from 'react'
import './services.css'
import Line from '../../assets/line.png'
import Micro from '../../assets/Frame.png'
import Cont from '../../assets/Frame (1).png';
import Tab from '../../assets/Frame (2).png'
import Clip from '../../assets/Frame (3).png'
import Kit from '../../assets/Frame (4).png'
import Rep from '../../assets/Frame (5).png'
import Button from '../Button/Button';

function Services() {
  return (
    <div className='service'>
        <h3>Our Services</h3>
        <div className='image-div mt-4'>
            <img src={Line} alt='line' />
        </div>
        <p className='mt-4 para-item'>We provide to you the best choiches for you. 
            Adjust it to your health needs and make sure your 
            undergo treatment <br/> with our highly qualified doctors 
            you can consult with us which type of service is suitable for your health
        </p>
      

      <div className='container mt-5'>
        <div className='row service-row'>
            <div className='col-sm-12 col-md-12 col-lg-4 card-item'>
                <div className='card-img'>
                    <img src={Micro} alt='microscope icon'/>
                </div>
                <h4>Search doctor</h4>
                <p className='card-texts'>Choose your doctor from thousands <br/> of specialist, 
                    general, and trusted <br/> hospitals
                </p>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-4 card-item'>
                <div className='card-img'>
                    <img src={Cont} alt='microscope icon'/> 
                </div>
                <h4>Online Pharmacy</h4>
                <p className='card-texts'>Buy  your medicines with our mobile application 
                    with a simple delivery system
                </p>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-4 card-item'>
                <div className='card-img'>
                    <img src={Tab} alt='microscope icon'/>      
                </div>
                <h4>Consultation</h4>
                <p className='card-texts'>Free consultation with our trusted 
                    doctors and get the best recomendations
                </p>
            </div>
        </div>
        <div className='row service-row mt-4'>
            <div className='col-sm-12 col-md-12 col-lg-4 card-item'>
                <div className='card-img'>
                    <img src={Clip} alt='microscope icon'/>
                </div>
                <h4>Details Info</h4>
                <p className='card-texts'>Free consultation with our trusted
                     doctors and get the best recomendations
                </p>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-4 card-item'>
                <div className='card-img'>
                    <img src={Kit} alt='microscope icon'/> 
                </div>
                <h4>Emergency Care</h4>
                <p className='card-texts'>You can get 24/7 urgent care for yourself 
                    or your children and yourlovely family
                </p>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-4 card-item'>
                <div className='card-img'>
                    <img src={Rep} alt='microscope icon'/>     
                </div>
                <h4>Tracking</h4>
                <p className='card-texts'>Track and save your medical 
                    history and health data 
                </p>
            </div>
        </div>
      </div>
      <div className='button-div'>
        <Button>Learn More</Button>
      </div>
    </div>
  )
}

export default Services
