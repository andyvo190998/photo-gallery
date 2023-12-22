import { overview } from '../../constants/overview.js';

const Main = () => {
  return (
    <div className="sm:columns-1 md:columns-2 md:mt-16 mt-10">
      {overview.map((item) => (
        <div key={item.id}>
          <p className="text-center text-stone-500 my-3">{item.title}</p>
          <img src={item.url} alt="img" />
        </div>
      ))}
    </div>
  );
};

export default Main;
