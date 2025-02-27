'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./listing_post.module.css";  // If you want to style the username

export function Listing_User({ userId }) {
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const response = await axios.get(`https://jsonplaceholder.org/users/${userId}`);
    setUser(response.data);
  };


  useEffect(() => {
    fetchUser();
  }, [userId]);


  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <b>{user.login.username}</b>
    </div>
  );
}