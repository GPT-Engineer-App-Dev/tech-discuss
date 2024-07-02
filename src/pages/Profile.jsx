import { useState } from "react";

const user = {
  username: "User123",
  joinDate: "2023-01-01",
  posts: 50,
};

const Profile = () => {
  const [username, setUsername] = useState(user.username);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log("Profile updated:", username);
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">User Profile</h2>
      <div className="mb-4">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Join Date:</strong> {user.joinDate}</p>
        <p><strong>Number of Posts:</strong> {user.posts}</p>
      </div>
      <form onSubmit={handleProfileUpdate}>
        <div className="mb-2">
          <label className="block mb-1">Edit Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;