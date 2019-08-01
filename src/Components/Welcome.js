import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Welcome = (props) => {
  return (
    <div className="container">
      <Jumbotron className="mt-5 bg-danger text-white">
        <h1 className="display-1 ">Hello, Welcome to my Book store</h1>
        <p className="lead">This is a Bookstore, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Welcome;
