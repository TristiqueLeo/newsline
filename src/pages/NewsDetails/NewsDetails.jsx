import React, { useState } from "react";
import styles from "./styles.module.css";
import Comment from "../../components/Comment/Comment";

const NewsDetails = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (text, parentId = null) => {
    const trimmedText = text.trim();
    if (!trimmedText) {
      return;
    }

    const newComment = {
      id: Date.now(),
      text,
      parentId,
      children: [],
    };

    if (parentId === null) {
      setComments((prevComments) => [...prevComments, newComment]);
    } else {
      const addReply = (comments, commentToAdd) => {
        return comments.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              children: [...comment.children, commentToAdd],
            };
          } else if (comment.children.length) {
            return {
              ...comment,
              children: addReply(comment.children, commentToAdd),
            };
          }
          return comment;
        });
      };

      setComments((prevComments) => addReply(prevComments, newComment));
    }

    setNewComment("");
  };

  return (
    <div className={styles.main}>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Добавьте комментарий..."
      />
      <button onClick={() => handleAddComment(newComment)}>
        Добавить комментарий
      </button>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onAddReply={handleAddComment}
        />
      ))}
    </div>
  );
};

export default NewsDetails;
