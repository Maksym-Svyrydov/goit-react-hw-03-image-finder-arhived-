// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Component } from 'react';

import 'react-toastify/dist/ReactToastify.css';
//
//
export class SearchBar extends Component {
  state = {
    search: '',
  };
  handleInputChange = e => {
    this.setState({ search: e.currentTarget.value });
    //  console.log({ earch: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      return toast.error('Введите слово для поиска');
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };
  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
