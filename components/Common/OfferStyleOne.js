import Link from 'next/link';

const OfferStyleOne = () => {
  return (
    <section className='offer-area bg-image1 ptb-100 jarallax'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-5 col-md-6'>
            <div className='offer-content'>
              <span className='sub-title'>Limited Time Offer!</span>
              <h2>-20% OFF</h2>
              <p>Get The Best Deals Now</p>

              <Link href='/products-without-sidebar'>
                <a className='default-btn'>Discover Now</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferStyleOne;
