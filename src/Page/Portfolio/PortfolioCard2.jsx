import PropTypes from 'prop-types';
const PortfolioCard2 = ({ item }) => {
  return (
    <section className='border rounded-2xl p-4 duration-300 hover:bg-slate-900'>
      <div className="max-h-56 overflow-hidden rounded-2xl">
        <img
          src={item.image}
          className="shadow  rounded-lg overflow-hidden border"
        />
      </div>
      <div className="mt-8">
        <h4 className="font-bold text-xl text-base-100 uppercase">{item.title}</h4>
        <div className="mt-5 flex flex-col md:flex-row gap-2">
          <a href={item.clientLink} target='_blank' type="button" className="btn-portfolio" >
            Client Repo..
          </a>
          <a href={item.serverLink} target='_blank' type="button" className="btn-portfolio" >
           Server Repo..
          </a>
          <a href={item.liveLink} target='_blank' type="button" className="btn-portfolio underline" >
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