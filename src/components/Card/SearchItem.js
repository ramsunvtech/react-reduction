import React, { useState, useEffect } from 'react';
import get from 'lodash/get';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Spinner,
} from 'reactstrap';

// Action.
import { getCompanyDetails } from '../../store/actions/company';

// Constants.
import { BASE_URL, TOKEN_STRING } from '../../store/constants';

const SearchItem = ({ color, title }) => {
  const [cardDetails, setCardDetails] = useState({
    desc: '',
    author: '',
  });

  useEffect(() => {
      if (title) {
          getCompanyDetails(title)
            .then(response => {
                const { description, CEO } = get(response, 'data');
                setCardDetails({
                    desc: description,
                    author: CEO,
                });
            });
      }
  }, []);

  return (
    <Card
        inverse
        className={`border-0 bg-gradient-theme-${color}`}
        style={{
            height: 200,
        }}
    >
        <CardBody className="d-flex flex-column justify-content-start align-items-start">
        <CardTitle>{title}</CardTitle>
        <CardText style={{
            width: '500px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            display: 'inline-block',
            textOverflow: 'ellipsis',
            margin: '0',
        }}>
            {cardDetails.desc ? cardDetails.desc : (
                <Spinner color="danger" />
            )}
        </CardText>
        </CardBody>

        <CardBody className="d-flex justify-content-between align-items-center">
        <CardText>{cardDetails.author}</CardText>
        <Button outline color="light" onClick={() => {
            if (title) {
                window.open(`${BASE_URL}/stock/${title}/company?${TOKEN_STRING}`);
            }
        }}>
            Click
        </Button>
        </CardBody>
    </Card>
  );
};

export default SearchItem;
