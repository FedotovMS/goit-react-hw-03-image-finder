import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
// import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
// import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';

// import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        {/* {this.state.showModal && <Modal />} */}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />

        <ImageGallery searchQuery={this.state.searchQuery} />
      </>
    );
  }
}
export default App;
