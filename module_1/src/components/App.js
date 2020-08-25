import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Section from './Section';
import TryOr from './TryOR';
import Collection from './Collection';
import BooksJson from '../books.json';

export default function App({ name }) {
  return (
    <>
      <Section>
        <Product name="Prop add name 1" text={name} />
      </Section>
      <Section title={name}>
        <Product name="Prop add name" />
      </Section>
      <Section title={name}>
        <TryOr nameIf="True" nameIfELse="True" child="True" />
      </Section>
      <Section>
        <TryOr />
      </Section>
      <Section title="JSON file">
        <Collection books={BooksJson} />
      </Section>
    </>
  );
}
App.defaultProps = {
  name: 'Нечего нету',
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};
