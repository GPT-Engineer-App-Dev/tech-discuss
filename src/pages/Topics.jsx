import { Link, useParams } from "react-router-dom";

const topics = [
  { id: 1, title: "Welcome to the forum", author: "Admin", replies: 10, lastPostDate: "2023-10-01" },
  { id: 2, title: "How to learn programming", author: "User123", replies: 5, lastPostDate: "2023-10-02" },
  // Add more topics here
];

const Topics = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <h2 className="text-2xl mb-4">Topics in Category {categoryId}</h2>
      <ul className="space-y-2">
        {topics.map((topic) => (
          <li key={topic.id} className="border p-2 rounded">
            <Link to={`/topics/${topic.id}`} className="text-blue-500 hover:underline">
              {topic.title}
            </Link>
            <div className="text-sm text-gray-600">
              <span>Author: {topic.author}</span> | <span>Replies: {topic.replies}</span> | <span>Last Post: {topic.lastPostDate}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;