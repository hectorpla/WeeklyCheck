import * as React from 'react';
import CardList from './containers/CardList';
import SearchBar from './containers/SearchBar';

export function App() {
  // TODO searchbar
  return (
    <div className="container">
      <SearchBar />
      <CardList />
    </div>
  )
}