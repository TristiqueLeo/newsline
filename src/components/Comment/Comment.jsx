import React, { useState } from "react";
import styles from "./styles.module.css";

const Comment = ({ comment, onAddReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (!replyText.trim()) {
      return;
    }
    onAddReply(replyText, comment.id);
    setReplyText("");
    setShowReplyForm(false);
  };

  return (
    <div className={styles.comment}>
      <p>{comment.text}</p>
      <div className={styles.commentActions}>
        <button
          onClick={() => setShowReplyForm(!showReplyForm)}
          className={styles.replyButton}
        >
          Ответить
        </button>
      </div>
      {showReplyForm && (
        <div>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Ваш ответ..."
            className={styles.textarea}
          />
          <button onClick={handleReply} className={styles.button}>
            Отправить
          </button>
        </div>
      )}
      {comment.children && (
        <div className={styles.replies}>
          {comment.children.map((child) => (
            <Comment key={child.id} comment={child} onAddReply={onAddReply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
