import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import useSWR from "swr";

import api from "../api/launchlibrary";

const LaunchDetail = (props) => {
  const id = props.match.params.id;
  const { data, error } = useSWR(`/${id}`, (url) =>
    api.get(url).then((r) => r.data)
  );

  if (error) console.log(error);
  if (!data) return <div>Loading...</div>;
  const result = data.launches[0];
  return (
    <Container>
      <div>Detail for Launch : {result.name}</div>
      <Row>
        <Col>
          <ul>
            <li>Rocket Name : </li>
            <li>Launch Service Provider : </li>
            <li>Launch Location : </li>
            <li>Pad</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>{result.rocket.name}</li>
            <li>{result.lsp.name}</li>
            <li>{result.location.name}</li>
            <li>{result.location.pads.map((pad) => pad.name)}</li>
          </ul>
        </Col>
      </Row>
      <div>
        <Button tag={Link} to="/launchlist" color="primary">
          Back
        </Button>
      </div>
    </Container>
  );
};

export default LaunchDetail;
