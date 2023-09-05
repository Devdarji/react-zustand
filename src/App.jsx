import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iure consectetur ea mollitia tempore, impedit
        vel iste reiciendis adipisci aut incidunt beatae possimus similique rem voluptatibus officia! At exercitationem
        recusandae, sit iusto quos rerum ab asperiores obcaecati aut fugit neque id libero assumenda eius. Mollitia
        dignissimos porro esse cum deserunt.
      </p>

      <Link to="/store">Go to store page</Link>
    </div>
  );
}

export default App;
