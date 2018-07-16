import * as React from 'react';
import { connect } from 'react-redux';
import { FilterActionThunkDispatch, notifySearchTextChange } from '../actions';
// import { Field, reduxForm } from 'redux-form';
// import { AppState } from '../types';

// interface Props {
//   handleSubmit: any // TODO temporaily integrate redux form without type
// }

// function SearchField() {
//   return (
//     <input placeholder="type content to search..." />
//   )
// }

// function SearchForm({handleSubmit}: Props) {
//   return (<form onSubmit={handleSubmit}>
//     <Field name="search" component={SearchField} />
//   </form>)
// }

// const SearchFormComponent = reduxForm({
//   form: "search"
// })(SearchForm);


interface Props {
  handleTextChange?: (text: string) => void;
}

// might don't need a form
// when the content in the contentbar changes, dispatch an action
function SearchBar({ handleTextChange }: Props) {
  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    handleTextChange!(e.currentTarget.value);
  }

  return (
    <div className="container">
      {/* <SearchFormComponent onSubmit={} /> */}
      <input onKeyUp={handleKeyUp} placeholder="type content to search" />
    </div>
  )
}

export function mapDispatchToProps(dispatch: FilterActionThunkDispatch) {
  return {
    handleTextChange: (text: string) => dispatch(notifySearchTextChange(text))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
