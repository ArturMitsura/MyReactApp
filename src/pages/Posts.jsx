import React, { useState, useMemo, useEffect } from 'react';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/MyModal/MyModal';
import '../styles/App.css';
import { usePosts } from "../hooks/usePosts";
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { usePagination } from '../hooks/usePagination';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
   const [posts, setPosts] = useState([])
   const [filter, setFilter] = useState({ sort: '', query: '' })
   const [modal, setModal] = useState(false);
   const [totalPages, setTotalPages] = useState(0);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);
   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query); // Вызываем наш хук

   const pagesArray = usePagination(totalPages);

   const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data)
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
   })
   console.log(totalPages);

   useEffect(() => {
      fetchPosts(limit, page);
   }, [])

   const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
   }

   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   const changePage = (page) => {
      setPage(page)
      fetchPosts(limit, page)
   }

   return (
      <div className="App">

         <div className="header">
            <MyButton style={{ marginTop: 30 }} onClick={() => { setModal(true) }}>Создать пользователя</MyButton>
            <PostFilter
               filter={filter}
               setFilter={setFilter}
            />
         </div>
         <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
         </MyModal>
         {/* <hr style={{ margin: '15px 0' }} /> */}
         {postError &&
            <h1>Произошла ошибка ${postError}</h1>

         }
         {isPostsLoading
            ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
         }
         <Pagination
            page={page}
            changePage={changePage}
            pagesArray={pagesArray}
         />


      </div>
   );
}
export default Posts;
