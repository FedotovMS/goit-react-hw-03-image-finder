import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import css from './ImageGallery.module.css';
import fetchImages from '../../services/search-api';
import Modal from '../Modal/Modal';

class ImageGallery extends Component {
  state = {
    query: null,
    loading: false,
    error: null,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ loading: true, query: null });

      fetchImages(this.props.searchQuery)
        .then(data => this.setState({ query: data.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  toggleModal = imageUrl => {
    this.setState(({ showModal, modalImage }) => ({
      showModal: !showModal,
      modalImage: imageUrl || modalImage,
    }));
  };

  render() {
    const { error, loading, query, showModal, modalImage } = this.state;
    return (
      <div>
        {!loading && query && query.length === 0 && (
          <h2>No data found for the query "{this.props.searchQuery}".</h2>
        )}
        {loading && <Loader />}
        {error && <h1>{error.message}</h1>}
        {query && (
          <>
            <ul className={css.ImageGallery}>
              {query.map(item => (
                <ImageGalleryItem
                  key={item.id}
                  id={item.id}
                  image={item.webformatURL}
                  bigImage={item.largeImageURL}
                  tags={item.tags}
                  onClick={this.toggleModal}
                />
              ))}
            </ul>
            {showModal && (
              <Modal onClose={this.toggleModal} largeImageURL={modalImage} />
            )}
          </>
        )}
      </div>
    );
  }
}

export default ImageGallery;
