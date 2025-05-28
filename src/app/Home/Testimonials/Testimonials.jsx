import Image from 'next/image';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <p>Testimonials</p>
        <h2>What Our Clients Say</h2>
      </div>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="testimonial-card-header" style={{ backgroundColor: '#2db4d6' }}>
            <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Vanessa Adams" />
            <div>
              <h3>Vanessa Adams</h3>
              <p>Officer Cleaner</p>
            </div>
          </div>
          <div className="testimonial-card-body">
            <Image width={20} height={20} src="/assets/home/quote.png" className="quote" />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt porta velit, sed suscipit massa consequat sed. Integer est ante, dictum quis metus non, rhoncus accumsan.
            </p>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-card-header" style={{ backgroundColor: '#0b99d1' }}>
            <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="Daniel Palmer" />
            <div>
              <h3>Daniel Palmer</h3>
              <p>Businessman</p>
            </div>
          </div>
          <div className="testimonial-card-body">
           <Image width={20} height={20} src="/assets/home/quote.png" className="quote" />
          
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt porta velit, sed suscipit massa consequat sed. Integer est ante, dictum quis metus non, rhoncus accumsan.
            </p>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-card-header" style={{ backgroundColor: '#2a58b7' }}>
            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Henri Matisse" />
            <div>
              <h3>Henri Matisse</h3>
              <p>Painter</p>
            </div>
          </div>
          <div className="testimonial-card-body">
            <Image width={20} height={20} src="/assets/home/quote.png" className="quote" />
          
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt porta velit, sed suscipit massa consequat sed. Integer est ante, dictum quis metus non, rhoncus accumsan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
