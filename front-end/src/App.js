import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import SinglePost from './Components/SinglePost';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar />
      <Login />
    </div>
  );
}

export default App;

//sign up and log in use bcrypt on backend
// As a blogger I want to be able to create an account so that I can create blogs.
// The user credentials must be salted and hashed before being stored.


// As a blogger I want to be able to log into my account so that I can see all the blogs that I have created.
// After logging in, the blogger should be redirected to all of their blog posts.


//create new blog
// As a blogger I want to be able to create a new post so that I can share my insights with the world.
// After the post is created, the blogger should be redirected to all of their blog posts.
// A post displays title, content, and creation date.

// As a blogger I want to be able to see all of the posts I have created so that I can track my progress.
// The blog posts should only display the first 100 characters with “...” at the end if they are longer than 100 characters.
// might need css and do this in post.css
//  display: -webkit-box;
//  -webkit-line-clamp: 4;
//  -webkit-box-orient: vertical;

// As a blogger I want to be able to see any individual post I have made.
// The posts should only display the first 100 characters with “...” at the end if they are longer than 100 characters.

// As a blogger I want to be able to edit a post so that I can fix any mistakes I made creating it.
// When the user toggles edit mode, the page remains the same and the fields become editable.

// As a blogger I want to be able to delete a post so that I can remove any unwanted content.
// When the user deletes the blog they should be redirected to all of their blog posts.

// As a visitor I want to be able to view all posts created by all users so that I can consume content.
// Unauthenticated users should be able to view all posts, and any single post.
// The posts should only display the first 100 characters with “...” at the end if they are longer than 100 characters.

// As a visitor I want to be able to view a specific post created by all users so that I can consume content.
// Unauthenticated users should be able to view all posts, and any single post.

// As a blogger I want to be able to view all posts created by all users so that I can see other people’s content.
// Unauthenticated users should be able to view all posts, and any single post.