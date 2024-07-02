import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialTopics = [
  { id: 1, title: "Welcome to the forum", author: "Admin", replies: 10, lastPostDate: "2023-10-01" },
  { id: 2, title: "How to learn programming", author: "User123", replies: 5, lastPostDate: "2023-10-02" },
  // Add more topics here
];

const Topics = () => {
  const { categoryId } = useParams();
  const [topics, setTopics] = useState(initialTopics);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newTopic = {
      id: topics.length + 1,
      title: newPost.title,
      author: "CurrentUser", // Replace with actual user data
      replies: 0,
      lastPostDate: new Date().toISOString().split("T")[0],
    };
    setTopics([...topics, newTopic]);
    setNewPost({ title: "", content: "" });
  };

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
      <div className="mt-6">
        <h3 className="text-xl mb-2">Create a New Post</h3>
        <form onSubmit={handlePostSubmit}>
          <div className="mb-2">
            <Input
              type="text"
              name="title"
              placeholder="Post Title"
              value={newPost.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <Textarea
              name="content"
              placeholder="Post Content"
              value={newPost.content}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button type="submit">Submit Post</Button>
        </form>
      </div>
    </div>
  );
};

export default Topics;