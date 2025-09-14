import React, { useState } from 'react';

function CommentItem({ comment }) {
  const [showReplies, setShowReplies] = useState(true);
  return (
    <li>
      <p>
        <strong>{comment.name}</strong> - {comment.date}
      </p>
      <p>{comment.text}</p>
      {showReplies && comment.replies && comment.replies.length > 0 && (
        <ul className='replies'>
          {comment.replies.map((r, ind) => (
            <CommentItem key={`repl-${ind}`} comment={r} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default CommentItem;
