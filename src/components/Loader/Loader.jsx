import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return <ThreeDots
        color="orange"
        height={100}
        width={100}
        ariaLabel="three-dots-loading"
      />;
};

export default Loader;