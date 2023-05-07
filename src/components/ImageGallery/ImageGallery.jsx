import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import Loader from 'components/Loader/Loader';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    query: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      const API_KEY = '34617221-40fb3a679d52688cd42ce20c8';

      this.setState({ loading: true, query: null });

      fetch(
        `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&q=${this.props.searchQuery}`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`No images according to ${this.props.query} request`)
          );
        })
        .then(data => this.setState({ query: data.hits }))
        .catch(error => this.setState(error))
        .finally(this.setState({ loading: false }));
    }
  }

  render() {
    return (
      <div>
        {this.state.query && (
          <ul className={css.ImageGallery}>
            {this.state.query.map(item => (
              <ImageGalleryItem
                key={item.id}
                image={item.webformatURL}
                bigImage={item.largeImageURL}
              />
            ))}
            {this.state.loading && <h2>Loading...</h2>}
            {this.state.error && <h1>{this.state.error.message}</h1>}
          </ul>
        )}
      </div>
    );
  }
}

export default ImageGallery;
