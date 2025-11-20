import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "권태혁",
        comment : "안녕하세요, 권태혁입니다."
    },
    {
        name : "황성현",
        comment : "안녕하세요~ 황성현입니다."
    },
    {
        name : "이민주",
        comment : "ㅋㅋㅋㅋㅋ 뭐요"
    }
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );          
            })}
        </div>
    );
}

export default CommentList;