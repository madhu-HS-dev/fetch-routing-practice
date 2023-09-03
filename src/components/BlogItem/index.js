// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, topic, author, avatarUrl, imageUrl} = blogItemDetails
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="BlogItemContainer">
        <img src={imageUrl} alt={`item ${id}`} className="blog-item-image" />
        <div>
          <p className="blog-item-topic">{topic}</p>
          <h1 className="blog-item-heading">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={`avatar ${id}`} className="avatar-url" />
            <p className="blog-item-author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
