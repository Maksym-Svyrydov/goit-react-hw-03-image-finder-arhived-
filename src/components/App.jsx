import { fetchGallery } from '../API/AxiosAPI';
import { ToastContainer } from 'react-toastify';
import { SearchBar } from '../components/Searchbar/Searchbar';
import { Component } from 'react';
import { ImageGallery } from '../components/ImageGallery/ImageGallery';

// import Image from './ImageGalleryItem';
export class App extends Component {
  state = {
    query: '',
    isLoading: false,
    page: 1,
    images: [],
  };
  handleFormSubmit = query => {
    this.setState({ query });
  };
  componentDidUpdate = (_, prevState) => {
    if (this.state.query !== prevState.query) {
      fetchGallery(this.state.query, this.state.page)
        .then(data => {
          this.setState(prevState => ({
            images:
              this.state.page === 1
                ? [...data.hits]
                : [...prevState.images, ...data.hits],
            totalHits:
              this.state.page === 1
                ? data.totalHits - data.hits.length
                : data.totalHits - [...prevState.images, ...data.hits].length,
          }));
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ToastContainer autoClose={2500} />
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        React homework template
      </div>
    );
  }
}
