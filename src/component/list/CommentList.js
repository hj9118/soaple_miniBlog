import React from 'react';
import styled from 'styled-components';
import CommentListItem from './CommentListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function CommentListItem(props) {
  const { comment } = props;

  return (
    <Wrapper>
      {comments.map((comment, index) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </Wrapper>
  );
}

export default CommentList;
