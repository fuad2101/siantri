import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Hero />
      <SlideShow />
      <Footer />
    </>
  );}

function Hero() {
  return (
    <>
      <section className='hero-section hero' data-background=''>
        <div className='container'>
          <div className='row mt-3'>
            <div className='col-2'>
              <img className='img-fluid' src='images/logo.png' alt='' />
            </div>
            <div className='col-10 mt-4 text-center'>
              <h2 className='mb-1 '>Selamat Datang di BPOM Mamuju</h2>
              <h4 className=' mb-4'>
                Mohon menunggu kami akan segera melayani anda
              </h4>
            </div>
          </div>
        </div>
        <div className='scroll-left mt-5'>
          <p className='fw-bold'>
            Follow Sosial media kami : Instagram : @bpom.mamuju X:@bpommamuju
            Facebook:@bpom.mamuju YouTube:@balaipomdimamuju
          </p>
        </div>
      </section>
    </>
  );
}
  
function SlideShow() {
  return (
    <>
      <section className='section-lg pricing' id='pricing' />
      <div className='container'>
        <div className='row'>
          <div className="col-3">
            <video
              id='video-show'
              className='img-thumbnail'
              width=''
              controls
              autoPlay
              loop
              muted
            >
              <source src='video\Video SlideShow.mp4' type='video/mp4' />
              {/* <source src="movie.ogg" type="video/ogg">  */}
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='col'>
            <Loket />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col ml-4 mt-5'></div>
      </div>
      {/* background shapes */}
      <img
        className='pricing-bg-shape-1 up-down-animation'
        src='images/background-shape/seo-ball-1.png'
        alt='background-shape'
      />
      <img
        className='pricing-bg-shape-2 up-down-animation'
        src='images/background-shape/seo-half-cycle.png'
        alt='background-shape'
      />
      <img
        className='pricing-bg-shape-3 left-right-animation'
        src='images/background-shape/team-bg-triangle.png'
        alt='background-shape'
      />
    </>
  );
}
  
function Loket() {

  const [loketA, setLoketA] = useState('000');
  const [loketB, setLoketB] = useState('000');

  return (
    <div className='col'>
      <div className='row d-flex flex-column justify-content-around'>
        <div className='col-md-6 col-lg-12 mb-5 mb-lg-3 mt-5 pt-4'>
          <div className='rounded text-center pricing-table table-1'>
            <h4>Informasi & Konsultasi</h4>
            <h1 id='loketA'>{`A-${loketA}`}</h1>
          </div>
        </div>
        <div className='col-md-6 col-lg-12 mb-5 mb-lg-3'>
          <div className='rounded text-center pricing-table table-2'>
            <h4>Pengaduan</h4>
            <h1 id='loketB'>{`B-${loketB}`}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer(){
  return (
    <>
        <footer className="footer-section footer">
          <div className="container">
            <div className="row">
              <div className="col text-center text-lg-left mb-lg-0">
                <p className="text-center"> Copyright &copy BPOM Mamuju 2025</p>
              </div>
            </div>
          </div>
      </footer>
    </>
  )
}



export default App
