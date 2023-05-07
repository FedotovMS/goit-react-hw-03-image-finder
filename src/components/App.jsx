import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
// import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
// import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';

// import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
  };
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        {/* <Loader /> */}
        <ImageGallery searchQuery={this.state.searchQuery} />
      </>
    );
  }
}
export default App;
