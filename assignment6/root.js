// root.js

// 1️⃣ Blog data
const blogPosts = [
  {
    title: "My First Blog Post",
    author: "John Doe",
    date: "June 1, 2023",
    content:
      "Welcome to my first blog post! Today, I want to share my journey into the world of blogging.",
    isPrivate: true,
  },
  {
    title: "My Second Blog Post",
    author: "Jane Smith",
    date: "June 5, 2023",
    content:
      "In this post, I’m discussing the importance of work-life balance.",
    isPrivate: false,
  },
  {
    title: "A Day in the Life",
    author: "Alice Johnson",
    date: "June 10, 2023",
    content:
      "Ever wondered what a day in my life looks like?",
    isPrivate: false,
  },
  {
    title: "Tips for Healthy Eating",
    author: "Bob Lee",
    date: "June 15, 2023",
    content:
      "Eating healthy doesn’t have to be complicated.",
    isPrivate: true,
  },
  {
    title: "Traveling on a Budget",
    author: "Susan White",
    date: "June 20, 2023",
    content:
      "Dreaming of traveling the world but worried about the cost?",
    isPrivate: false,
  },
];

// 2️⃣ Header component
function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.tagline}</p>
    </header>
  );
}

// 3️⃣ PublicBlogPost
function PublicBlogPost(props) {
  return (
    <div className="blog-post">
      <h2>{props.title}</h2>
      <p className="meta">
        {props.author} | {props.date}
      </p>
      <p>{props.content}</p>
    </div>
  );
}

// 4️⃣ PrivateBlogPost
function PrivateBlogPost(props) {
  return (
    <div className="private-posts">
      <h2>{props.title}</h2>
      <p className="meta">
        {props.author} | {props.date}
      </p>
      <p>The content of this post is private</p>
    </div>
  );
}

// 5️⃣ BlogList (map + conditional rendering)
function BlogList(props) {
  return (
    <div className="blog-list">
      {props.posts.map((post, index) =>
        post.isPrivate ? (
          <PrivateBlogPost
            key={index}
            title={post.title}
            author={post.author}
            date={post.date}
          />
        ) : (
          <PublicBlogPost
            key={index}
            title={post.title}
            author={post.author}
            date={post.date}
            content={post.content}
          />
        )
      )}
    </div>
  );
}

// 6️⃣ Footer
function Footer(props) {
  return (
    <footer>
      © {props.year}
    </footer>
  );
}

// 7️⃣ App
function App() {
  return (
    <div className="app">
      <Header
        title="My Blog"
        tagline="A blog about everything"
      />

      <BlogList posts={blogPosts} />

      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

// 8️⃣ Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
