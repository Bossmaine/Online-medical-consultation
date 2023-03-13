import React from 'react'
import Line from '../../assets/line.png'
import './article.css'
import ArtImg1 from '../../assets/image 2.png'
import ArtImg2 from '../../assets/image 2 (1).png'
import ArtImg3 from '../../assets/image 3.png'
import Button from '../Button/Button'




function Article() {
  return (
    <div>
        <div className='article-texts-one'>
            <h3>Check out our latest article</h3>
            <div className='article-line mt-4'>
                <img src={Line} alt='Line' />
            </div>
        </div>

        <div className='container article-row'>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-4 mt-4 '>
                    <div className="card" style={{width: "19rem"}}>
                        <img src={ArtImg1} className="card-img-top art-img" alt="patient" />
                        <div className="card-body">
                            <h5 className="card-title">Disease detection, check <br/>
                                up in the laboratory
                            </h5>
                            <p className="card-text">
                            In this case, the role of the health <br/>
                            laboratory is very important to do <br/> a disease detection...
                            </p>
                            <a href="https://dapper-syrniki-79881d.netlify.app/">Read More <i className="bi bi-arrow-down"></i></a>
                        </div>
                    </div>
                </div>
                
                <div className='col-sm-12 col-md-12 col-lg-4 mt-4'>
                    <div className="card" style={{width: "19rem"}}>
                        <img src={ArtImg2} className="card-img-top art-img" alt="patient"/>
                        <div className="card-body">
                            <h5 className="card-title">Herbal medicines that are <br/>safe for consumption
                            </h5>
                            <p classNAme="card-text">
                                In this case, the role of the health <br/>
                                laboratory is very important to do <br/> a disease detection...
                            </p>
                            <a href="https://dapper-syrniki-79881d.netlify.app/">Read More <i className="bi bi-arrow-down"></i></a>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-4 mt-4'>
                    <div className="card" style={{width: "19rem"}}>
                        <img src={ArtImg3} className="card-img-top art-img" alt="patient" />
                        <div className="card-body">
                            <h5 className="card-title">Natural care for healthy <br/>
                                facial skin
                            </h5>
                            <p className="card-text">
                                A healthy lifestyle should start from <br/>
                                now and also for your skin health. <br/>
                                There are some...
                            </p>
                            <a href="https://dapper-syrniki-79881d.netlify.app/">Read More <i className="bi bi-arrow-down"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='button-div'>
            <Button>View All</Button>
      </div>
    </div>
   
  )
}

export default Article
