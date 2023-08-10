"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner
          name="Issawara Kongsricharoen 650610821"
          srcImgPro="/profileImages/mind.jpg"
          textPost="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
        />

        {comments.map((u) => (
          <Comment
            key={u.username}
            userImagePath={u.userImagePath}
            username={u.username}
            commentText={u.commentText}
            likeNum={u.likeNum}
            replies={u.replies}
          />
        ))}
      </div>
    </div>
  );
}
