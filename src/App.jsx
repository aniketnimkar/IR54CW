import './App.css'
import useFetch from './useFetch'


export default function App() {
const  { data, loading, error, fetchData }= useFetch("https://jsonplaceholder.typicode.com/posts")
console.log(data)
  return (
    <div>
      <h1>Fetch Data on Butotn Click</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <p>An error occured while fetching the posts.</p>}
      <div>
        {loading && "Loading..."}
        {
          data && data.length > 0 && (
            <ul> 
             {data.map((post)=> (
              <li key={post.id}>{post.title}</li>
             ))}
            </ul>
          )
        }
      </div>
    </div>
  )
}
