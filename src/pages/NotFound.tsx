import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Link
        to="/"
        className="py-2 px-3 bg-red-300 rounded-md text-white mt-4"
        aria-current="page"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
