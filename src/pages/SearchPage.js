import React from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash/get';

import {
  Col,
  Row,
} from 'reactstrap';

// Components.
import Page from 'components/Page';
import SearchItem from '../components/Card/SearchItem';

const SearchPage = () => {
  const peers = useSelector(state => get(state, 'peers.list', []));
  const colors = ['top', 'left', 'right'];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <Page title="Search" breadcrumbs={[{ name: 'search', active: true }]}>
      <Row>
        {Array.isArray(peers) && peers.map((item, index) => (
          <Col key={index} md={6} sm={6} xs={12} className="mb-3">
            <SearchItem color={getRandomColor()} title={item} />
          </Col>
        ))}
      </Row>
    </Page>
  );
};

export default SearchPage;
