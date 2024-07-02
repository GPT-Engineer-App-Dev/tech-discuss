import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "General Discussion" },
  { id: 2, name: "Programming" },
  { id: 3, name: "Hardware" },
  { id: 4, name: "Software" },
  { id: 5, name: "Networking" },
];

const Categories = () => {
  return (
    <div>
      <h2 className="text-2xl mb-4">Forum Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}/topics`} className="text-blue-500 hover:underline">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;