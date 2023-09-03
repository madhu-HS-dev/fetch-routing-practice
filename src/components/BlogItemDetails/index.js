// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogDataDetails: {}, isLoadingContent: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogDataDetails: updatedData, isLoadingContent: false})
  }

  renderContent = () => {
    const {blogDataDetails} = this.state
    const {title, content, avatarUrl, imageUrl, author} = blogDataDetails
    return (
      <div className="blog-Data-Details-container">
        <h1 className="title">{title}</h1>
        <div className="author-container">
          <img src={avatarUrl} className="avatar-url" alt="avatar" />
          <p className="blog-item-author">{author}</p>
        </div>
        <img src={imageUrl} className="blog-image" alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoadingContent} = this.state
    return (
      <div className="blog-Data-Details-container">
        {isLoadingContent ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderContent()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
