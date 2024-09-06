import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [protectedData, setProtectedData] = useState(null);
  const [error, setError] = useState("");

  // Fetch protected data when the component mounts
  useEffect(() => {
    fetchProtectedData();
  }, []);

  const fetchProtectedData = async () => {
    const token = localStorage.getItem("token"); // Get the token from localStorage

    try {
      const response = await fetch("http://localhost:5001/api/dashboard", {
        method: "GET",
        headers: {
          Authorization: token, // Include the token in the Authorization header
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch protected data");
      }

      const data = await response.json();
      setProtectedData(data); // Store the protected data in state
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {protectedData ? (
        <div>
          <p>Welcome, {protectedData.message}</p>
          {/* Display more protected data here */}
        </div>
      ) : (
        <p>{error ? error : "Loading..."}</p>
      )}
    </div>
  );
};

export default Dashboard;
