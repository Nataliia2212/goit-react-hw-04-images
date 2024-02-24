import React, { Component } from 'react';
import { serchImages } from 'servises/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    data: [],
    page: 1,
    query: '',
    totalImages: 0,
    images: null,
    isLoading: false,
    error: null,
    isOpen: false,
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true, error: null })
        const images = await serchImages({ page, q: query });
        this.setState(prev => ({data : [ ...prev.data, ...images.hits], totalImages: images.totalHits}))
      } catch (error) {
        this.setState({ error })
      } finally {
        this.setState({ isLoading: false })
      }
    }
  }

  handleSubmit = (query) => {
    this.setState({query, data: [], page: 1, totalImages: 0})
  }

  handleClick = () => {
    this.setState(prev => ({page: prev.page + 1}))
  }

  handleToggleModal = () => {
		this.setState(prev => ({ isOpen: !prev.isOpen }))
  }
  
  handlClickOnImages = (images) => {
    this.setState({isOpen : true, images })
  }

  render() {
    const { data, isLoading, isOpen, images, totalImages, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {error && <h2>Something went wrong!! Try again</h2>}
        <ImageGallery galleryList={data} openModal={ this.handlClickOnImages} />
        {isLoading && <Loader />}
        {data && data.length < totalImages && <Button onClick={this.handleClick} />}
        {isOpen && <Modal images={images} closeModal={this.handleToggleModal} />}
      </div>
    )
  }
}

