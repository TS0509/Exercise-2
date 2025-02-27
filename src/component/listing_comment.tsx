'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import { comment } from "postcss";

export function Listing_Comment({ id }) {
  const [CommentData, setCommentData] = useState();

  const fetchComment = async () => {
    const response = await axios.get(`https://jsonplaceholder.org/comments/${id}`);
    setCommentData(response.data);
  };

  useEffect(() => {
    fetchComment();
  }, [id]);

  if (!CommentData) return <div>Loading...</div>;

  return (
    <div>
      {
        <p>{CommentData.comment}</p>
      }
    </div>
  );
}