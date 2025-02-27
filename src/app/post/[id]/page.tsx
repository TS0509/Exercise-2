'use client'

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { Listing_User } from "@/component/listing_user";
import styles from "@/app/post/[id]/page.module.css";
import { Listing_Comment } from "@/component/listing_comment";


export default function Post_Detail() {
    const [postData, setPostData] = useState(null);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const fetchPostData = async () => {
            const response = await axios.get(`https://jsonplaceholder.org/posts/${id}`);
            setPostData(response.data);
        };

        if (id) {
            fetchPostData();
        }
    }, [id]);


    if (!postData) return <div>Loading post details...</div>;

    return (
        <div>
            <div key={postData.id} className={styles.card}>
                <div style={{ display: "flex" }}>
                    <img className={styles.profileImage} src={postData.thumbnail}></img>
                    <Listing_User userId={postData.userId} />
                </div>
                <img className={styles.img} src={postData.image}></img>
                <div className={styles.container}>
                    <b>{postData.title}</b>
                    <p>{postData.content}</p>
                    <p style={{ paddingTop: "20px" }}>Date: {postData.updatedAt.substring(0, 10)}</p>
                    <p>Time: {postData.updatedAt.substring(11, 19)}</p>
                    <br />
                    <div style={{ justifyContent: "space-between", display: "flex" }}>
                        <p>Slug:{postData.slug}</p>
                        <p>Category:{postData.category}</p>
                    </div>
                </div>

            </div>
        </div>

    );
    //this is worng the commment code need ask teacher
    // <div>
    // <br/><br/>
    // <p>this is comment:</p>
    // <br/>
    // <Listing_Comment id={postData.id} />
    // </div>
}
