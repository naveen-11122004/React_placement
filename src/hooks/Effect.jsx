// src/hooks/Effect.jsx
import { useState, useEffect } from 'react';

const Effect = () => {
  const [count, setCount] = useState(0);
  const [posts,setPosts]=useState([]);

  // useEffect runs after render
  useEffect(() => {
    console.log('Component mounted');

    // Update the document title every time count changes
    document.title = `Clicked ${count} times`;

    // Cleanup function
    return () => {
      console.log('Component unmounted or before next effect');
    };
  }, [count]); // This effect runs whenever 'count' changes
   useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setPosts(data))
    },[])
    console.log(posts);
  return (
    <div style={{ padding: '1rem' }}>
      <h2>useEffect Example</h2>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Click Me
      </button>
      <ul>
                {posts.map((post)=>(
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
    </div>
  );
};

export default Effect;