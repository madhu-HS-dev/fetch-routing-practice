// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(item => ({
      id: item.id,
      title: item.title,
      topic: item.topic,
      author: item.author,
      avatarUrl: item.avatar_url,
      imageUrl: item.image_url,
    }))

    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    return (
      <div className="blog-lists-container">
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogData.map(eachBlogItem => (
            <BlogItem key={eachBlogItem.id} blogItemDetails={eachBlogItem} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
