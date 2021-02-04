import React from "react";
import { Link } from "react-router-dom";
// import styled from 'styled-components'
// import Timesheet from './Timesheet'
import { useGlobalState } from "../../utils/stateContext";
import { Card, Table, Container, Row, Col } from "react-bootstrap";

export default function Timesheets() {
  const { store } = useGlobalState();
  const { timesheets } = store;
  if (!timesheets) return null;

  const list = timesheets.map((timesheet, index) => {
    return (
      <tr className="active-row">
        <td key={index}>
          <Link
            style={{ color: "#009879" }}
            key={timesheet.id}
            to={`/portal/${timesheet.id}`}
          >
            {timesheet.name}
          </Link>
        </td>
        <td>{timesheet.date}</td>
        <td>{timesheet.start_time}</td>
        <td>{timesheet.end_time}</td>
        <td>{timesheet.total_hours}</td>
        <td></td>
        <td></td>
      </tr>
    );
  });

  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Total Hours</th>
            <th>Update?</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>

      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="striped-tabled-with-hover">
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Name</th>
                      <th className="border-0">Date</th>
                      <th className="border-0">Start Time</th>
                      <th className="border-0">End Time</th>
                      <th className="border-0">Total Hours</th>
                      <th className="border-0">Update?</th>
                      <th className="border-0">Delete?</th>
                    </tr>
                  </thead>
                  <tbody>{list}</tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
