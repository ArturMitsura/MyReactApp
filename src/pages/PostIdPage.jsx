import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import Comments from '../components/Comments';
import '../styles/App.css';

const PostIdPage = () => {
   const params = useParams();
   //console.log(params);
   const [post, setPost] = useState({});
   const [comments, setComments] = useState([]);
   const [fetchPostById, isLoading, error] = useFetching(async (id) => {
      const response = await PostService.getById(id)
      setPost(response.data);
   })
   const [fetchComments, isComLoading, comerror] = useFetching(async (id) => {
      const response = await PostService.getCommentsByPostId(id)
      setComments(response.data)
   })
   useEffect(() => {
      fetchPostById(params.id)
      fetchComments(params.id)
   }, [])

   return (
      <div className='PostId'>
         <h1 className='PostId__h1' style={{ textAlign: 'center', marginTop: '25px' }}>Cтраница поста с id {params.id}</h1>
         {
            isLoading
               ? <Loader />
               : <div>{post.id}. {post.title}</div>
         }
         <h2 className='PostId__h2'>
            Комментарии к посту
         </h2>
         {
            isComLoading
               ? <Loader />
               : <Comments comments={comments} />
         }
      </div >
   );
};

export default PostIdPage; 