import BlogApiService from '../../services/api/blog';
import PostBody from '../../components/page-specific/blog/PostBody/PostBody';


const Post = ({ postData }) => {  

  return (
      <PostBody postData={postData}/>
  );
}

export default Post;
  
export async function getServerSideProps({ params }) {
  const postData = await BlogApiService.getSinglePostData(params)

  return {
    props: { postData }
  }
}
