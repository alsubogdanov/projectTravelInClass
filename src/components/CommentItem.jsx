import React, { useState } from 'react';
import ReplayForm from './ReplayForm';

function CommentItem({ comment, addReply }) {
  const [showReplies, setShowReplies] = useState(false);
  const [showReplayForm, setShowReplayForm] = useState(false);

  const handleReplaySubmit = (reply) => {
    //  console.log(reply); //data from replayForm
    addReply(reply, comment);
    setShowReplayForm(false);
    setShowReplies(true);
  };
  return (
    <li>
      <p>
        <strong>{comment.name}</strong> -{' '}
        {new Date(comment.date).toLocaleString('ru-RU', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
      <p>{comment.text}</p>
      <div className='comments-action'>
        <button onClick={() => setShowReplayForm(!showReplayForm)}>
          {showReplayForm ? 'Cancel' : 'Replay'}
        </button>
        {comment.replies && comment.replies.length > 0 && (
          <button onClick={() => setShowReplies(!showReplies)}>
            {showReplies ? 'Hide replies' : 'Show replies'}
          </button>
        )}
      </div>
      {showReplayForm && <ReplayForm onSubmit={handleReplaySubmit} />}

      {showReplies && comment.replies && comment.replies.length > 0 && (
        <ul className='replies'>
          {comment.replies.map((r, ind) => (
            <CommentItem key={`repl-${ind}`} comment={r} addReply={addReply} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default CommentItem;
