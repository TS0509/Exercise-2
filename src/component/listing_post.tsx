'use client'

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios"
import styles from "./listing_post.module.css";
import { Listing_User } from "@/component/listing_user";


export function Listing_Post() {
  const [data, setData] = useState([])
  const params = useParams();
  const router = useRouter();

  const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.org/posts")
    setData(response.data)
    console.log(response.data)

  }
  useEffect(() => {
    fetchPosts()
  }, [])

  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.card_container}>
      {
        data.map(i => {
          return (
            <div key={i.id} className={styles.card} onClick={() => router.push(`/post/${i.id}`)}>
              <div style={{ display: "flex" }}>
                <img className={styles.profileImage} src={i.thumbnail}></img>
                <Listing_User userId={i.userId} />
              </div>
              <img className={styles.img} src={i.image}></img>
              <div className={styles.container}>
                <p style={{ paddingTop: "20px" }}>Date: {i.updatedAt.substring(0, 10)}</p>
                <p>Time: {i.updatedAt.substring(11, 19)}</p>
              </div>

            </div>
          );
        })
      }
    </div>
  );
}
