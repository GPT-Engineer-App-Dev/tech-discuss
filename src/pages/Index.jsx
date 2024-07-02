import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to Tech Forum</h1>
      <p className="mt-4">A place to discuss all things tech.</p>
      <div className="mt-6">
        <Link to="/categories" className="text-blue-500 hover:underline">
          Explore Categories
        </Link>
      </div>
    </div>
  );
};

export default Index;