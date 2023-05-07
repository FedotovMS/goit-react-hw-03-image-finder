import { Component } from 'react';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';
// import ImageGallery from 'components/ImageGallery/ImageGallery';

class Searchbar extends Component {
  state = {
    pics: null,
    loading: false,
    serchQuery: '',
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch('https://pixabay.com/api/?key=34617221-40fb3a679d52688cd42ce20c8?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ pics: data.hits });
  //     })
  //     .finally(() => this.setState({ loading: false }))
  //     .catch(error => console.log(error));
  // }

  handleInputChange = event => {
    this.setState({ serchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.serchQuery.trim() === '') {
      toast.warn('Input search query!');
      return;
    }
    this.props.onSubmit(this.state.serchQuery);
    this.setState({ serchQuery: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.serchQuery}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
