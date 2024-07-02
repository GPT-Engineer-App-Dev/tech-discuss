import { useParams } from "react-router-dom";
import { useState } from "react";

const topic = {
  id: 1,
  title: "Welcome to the forum",
  content: "This is the first post in the forum. Feel free to discuss anything related to tech here.",
  author: "Admin",
  replies: [
    { id: 1, author: "User1", content: "Thanks for creating this forum!", date: "2023-10-01" },
    { id: 2, author: "User2", content: "Looking forward to great discussions.", date: "2023-10-02" },
    // Add more replies here
  ],
};

const TopicDetails = () => {
  const { topicId } = useParams();
  const [replyContent, setReplyContent] = useState("");

  const handleReplySubmit = (e) => {
    e.preventDefault();
    // Handle reply submission logic here
    console.log("Reply submitted:", replyContent);
    setReplyContent("");
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">{topic.title}</h2>
      <p className="mb-4">{topic.content}</p>
      <div className="mb-6">
        <h3 className="text-xl mb-2">Replies</h3>
        <ul className="space-y-2">
          {topic.replies.map((reply) => (
            <li key={reply.id} className="border p-2 rounded">
              <div className="text-sm text-gray-600">
                <span>Author: {reply.author}</span> | <span>Date: {reply.date}</span>
              </div>
              <p>{reply.content}</p>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleReplySubmit}>
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows="4"
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Write your reply..."
        ></textarea>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit Reply</button>
      </form>
    </div>
  );
};

export default TopicDetails;