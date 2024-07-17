
import PropTypes from 'prop-types';
import { useState } from 'react';
// ..

const PortfolioCard2 = ({ item }) => {
  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <section  className='group border bg-slate-800  border-base-content rounded-xl p-4 duration-500 hover:bg-slate-900 shadow-emerald-950'>
      <div className="max-h-56 overflow-hidden rounded-xl">
        {loading && <div className="skeleton min-h-72 w-full"></div>}
        <img
        alt={item.title}
          src={item.image}
          onLoad={handleImageLoad}
          loading='lazy'
          className="  min-h-72 shadow-md object-cover hover:scale-125 -rotate-2 group-hover:rotate-0 duration-500  rounded-lg overflow-hidden border"
        />
      </div>
      <div className="mt-8">
        <h4 className="font-bold text-md text-base-100 uppercase">{item.title}</h4>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2  gap-2">
         {item.clientLink && <a href={item.clientLink} target='_blank' type="button" className="btn-portfolio" >
            Client side
          </a>}
        {item.serverLink ?  <a href={item.serverLink} target='_blank' type="button" className="btn-portfolio" >
           Server side
          </a> :<p className='text-base-100 btn-portfolio  '>Paid Project</p>}
          <a href={item.liveLink} target='_blank' type="button" className="btn-portfolio  " >
           Live Link
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCard2;
PortfolioCard2.propTypes={
    item:PropTypes.object
}