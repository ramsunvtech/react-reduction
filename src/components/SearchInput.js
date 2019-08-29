import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MdSearch } from 'react-icons/md';
import { Form, Input, Button } from 'reactstrap';

// Action.
import { getPeersList, setPeerResponse } from '../store/actions/peers';

const SearchInput = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const fetchPeerList = useCallback(() => {
    getPeersList(keyword).then(peerResponse => {
      dispatch(setPeerResponse(peerResponse));
    })
    .catch(() => {
      dispatch(setPeerResponse([
        'MSFT',
        'AAPL',
        'GOOG',
      ]));
    });
  }, [dispatch])
  return (
    <Form inline className="cr-search-form" onSubmit={e => e.preventDefault()}>
      <MdSearch
        size="20"
        className="cr-search-form__icon-search text-secondary"
      />
      <Input
        type="search"
        className="cr-search-form__input"
        value={keyword}
        onChange={(e) => {
          e.preventDefault();
          setKeyword(e.target.value);
        }}
        onKeyUp={(e) => {
          e.preventDefault();
          if (e.keyCode === 13) {
            fetchPeerList();
          }
        }}
        placeholder="Search..."
      />
      &nbsp;
      <Button color="primary" onClick={fetchPeerList}>Search</Button>
    </Form>
  );
};

export default SearchInput;
