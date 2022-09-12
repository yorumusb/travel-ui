import React,{useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data=[
  {
    id:1,
    imgSrc:img,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventures activities. '
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit feugiat rhoncus. Cras eget diam eget dui rhoncus lobortis. Etiam vel ante dui. Aenean sodales velit.'
  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Great Barrier Reef',
    location:'Australia',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas feugiat ultrices. Etiam tristique est eget interdum accumsan. Class aptent taciti sociosqu ad litora torquent.'
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'Cappadocia',
    location:'Turkey',
    grade:'CULTURAL RELAX',
    fees:'$800',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacus ex, aliquam gravida odio vel, porttitor ullamcorper est. Curabitur hendrerit pretium sapien ut posuere.'
  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'Guanajuato',
    location:'Mexico',
    grade:'CULTURAL RELAX',
    fees:'$1100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin magna mi, eget consequat urna porta ac. Nam eget est et purus condimentum.'
  },
  {
    id:6,
    imgSrc:img6,
    destTitle:'Cinque Terre',
    location:'Italy',
    grade:'CULTURAL RELAX',
    fees:'$840',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis facilisis nisl, sit amet viverra velit. Etiam fringilla nibh nunc, in congue.'
  },
  {
    id:7,
    imgSrc:img7,
    destTitle:'Angkor Wat',
    location:'Cambodia',
    grade:'CULTURAL RELAX',
    fees:'$790',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed velit finibus, facilisis ante id, placerat erat. Nullam tempus auctor dapibus. '
  },
  {
    id:8,
    imgSrc:img8,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$900',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet ullamcorper tortor. Curabitur quis pulvinar dui, sit amet dignissim. '
  },
  {
    id:9,
    imgSrc:img9,
    destTitle:'Bali Island',
    location:'Indonesia',
    grade:'CULTURAL RELAX',
    fees:'$500',
    description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
  }
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (
    <section className='main container section'>

      <div className='secTitle'>
        <h3 data-aos="fade-right" className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div> 

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>

                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Main