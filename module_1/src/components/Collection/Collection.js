import React from 'react';
//https://ru.reactjs.org/docs/lists-and-keys.html
import PropTypes from 'prop-types';
import MS from './CollectionStyle.js';
import SplitButton from './SplitButton';
import Grid from './Grid';

console.dir(MS);

function Collection({ books }) {
  return (
    <div>
      <MS.ButtonGroup disableElevation variant="contained" color="primary">
        <MS.Button color="primary">One </MS.Button>
        <MS.Button color="primary">Two </MS.Button>
      </MS.ButtonGroup>
      <SplitButton />
      <MS.List>
        {books.map(value => (
          <MS.ListItem key={value.id} className={value.id}>
            {value.name}
            {` -- Выводит значение по ключу`}
          </MS.ListItem>
        ))}
      </MS.List>
      <Grid />
      <a href="https://material-ui.com/ru/components/tables/">tables</a>
    </div>
  );
}
Collection.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Collection;
