import '../components/card.css';
import insta1 from '../img/insta1.jpg';
import insta2 from '../img/insta2.jpg';
import insta3 from '../img/insta3.jpg';
import insta4 from '../img/insta4.jpg';
import insta5 from '../img/insta5.jpg';
import insta6 from '../img/insta6.jpg';
import insta7 from '../img/insta7.jpg';
import insta8 from '../img/insta8.jpg';
import insta9 from '../img/insta9.jpg';
import insta10 from '../img/insta10.jpg';
import insta11 from '../img/insta11.jpg';
import insta12 from '../img/insta12.jpeg';

const Card = () => {
  return (
    <>
      <section className="seccard">
        <div className="card">
          <div className="first">
            <img
              src={insta1}
              style={{ objectFit: 'cover' }}
               
            />
          </div>

          <div className="sec">
            <img
              src={insta2}
              style={{ objectFit: 'cover' }}
            /> 
          </div>

          <div className="three">
            <img
              src={insta3}
              style={{ objectFit: 'cover' }}
               
            />  
          </div>

          <div className="four">
            <img
              src={insta4}
              style={{ objectFit: 'cover' }}
            /> 
          </div>

          <div className="five">
            <img
              src={insta5}
              style={{ objectFit: 'cover' }}
              
            /> 
          </div>

          <div className="six">
            <img
              src={insta6}
              style={{ objectFit: 'cover' }}
              
            /> 
          </div>

          <div className="seven">
            <img
              src={insta7}

              style={{ objectFit: 'cover' }}
             
            /> 
          </div>

          <div className="eight">
            <img
              src={insta8}
              style={{ objectFit: 'cover' }}
            /> 
          </div>

          <div className="nine">
            <img
              src={insta9}
              style={{ objectFit: 'cover' }}
            /> 
          </div>

          <div className="ten">
            <img
              src={insta10}
              style={{ objectFit: 'cover' }}
               
            /> 
          </div>

          <div className="eleven">
            <img
              src={insta11}
              style={{ objectFit: 'cover' }}
               
            /> 
          </div>

          <div className="t12">
            <img
              src= {insta12}
              style={{ objectFit: 'cover' }}
              
            /> 
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
