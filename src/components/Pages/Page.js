import React from 'react'
import './page.css'
import PageImg from '../../assets/trafalgar-illustration sec02 1.png'
import PageImg2 from '../../assets/trafalgar-illustration sec03 1.png'
import Line from '../../assets/line.png'
import Button from '../Button/Button'
function Page() {
  return (
    <div>
        <div className='container page-div'>
            <div className='row page-row'>
                <div className='col-sm-12 col-md-12 col-lg-6'>
                    <img src={PageImg} alt='Page' />
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 mt-5 page-para'>
                    <h4>Leading healthcare <br/> providers</h4>
                    <img src={Line} alt='Line'/>
                    <p>Trafalgar provides progressive, and affordable <br/> healthcare, 
                        accessible on mobile and online for <br/> everyone. To us, it’s not just work. 
                        We take pride <br/> in the solutions we deliver
                    </p>
                    <Button>Learn More</Button>
                </div>
            </div>
        </div>
        <div className='container page-div'>
            <div className='row page-row pg-row'>
                <div className='col-sm-12 col-md-12 col-lg-6 page-para mt-5'>
                <h4>Download our <br/> mobile apps providers</h4>
                    <img className='mt-5' src={Line} alt='Line'/>
                    <p>Our dedicated patient engagement app and <br/> 
                        web portal allow you to access information  <br/>  
                        instantaneously no tedeous form, long calls,  <br/> 
                        or administrative hassle and securely
                    </p>
                    <Button>Download <i class="bi bi-arrow-down"></i></Button>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 mt-5'>
                    <img src={PageImg2} alt='Page' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page
