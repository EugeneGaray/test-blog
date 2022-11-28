import { getAllPostsExcerpt, getPostData, getPostsExcerptByCategories, searchAllPosts } from '../../../graphql/blogQueries';

class BlogApiService {
  static async getPostsRequestsList() {
    const res = await fetch("https://cleankarma.stallevs.ru/graphql", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: getAllPostsExcerpt
      })
    });
  
    const json = await res.json();
    const postsList = json.data.posts.edges.map((item) => item.node);
    const categories = json.data.categories.edges.map((item) => item.node);

    return { postsList, categories };
  }

  static async getSinglePostData(params) {
    const res = await fetch("https://cleankarma.stallevs.ru/graphql", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: getPostData,
        variables: {
          id: params.slug,
          idType: 'SLUG'
        }
      })
    });
  
    const json = await res.json();
    return json.data.post;
  }

  static async getFilteredPosts(categoriesIdsArray) {
    const res = await fetch("https://cleankarma.stallevs.ru/graphql", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: getPostsExcerptByCategories,
        variables: {
          categoriesList: categoriesIdsArray
        }
      })
    });
    
    const json = await res.json();
    return json.data.posts.edges.map((item) => item.node);
  }

  static async searchPosts(query) {
    const res = await fetch("https://cleankarma.stallevs.ru/graphql", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: searchAllPosts,
        variables: {
          query
        }
      })
    });
  
    const json = await res.json();
    const postsList = json.data.posts.edges.map((item) => item.node);

    return postsList;
  }
}

export default BlogApiService;