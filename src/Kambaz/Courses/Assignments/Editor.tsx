import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Container className="mt-4">
      <h4>Assignment Name</h4>
      <Form.Control type="text" defaultValue="A1 - ENV + HTML" className="mb-3" />
      
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify."
        />
      </Form.Group>
      
      <Row className="mb-3">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Points</Form.Label>
            <Form.Control type="number" defaultValue={100} />
          </Form.Group>
        </Col>
      </Row>
      
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Assignment Group</Form.Label>
            <Form.Select>
              <option>Assignments</option>
              <option>Quizzes</option>
              <option>Projects</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Display Grade as</Form.Label>
            <Form.Select>
              <option>Percentage</option>
              <option>Points</option>
              <option>Complete/Incomplete</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      
      <Form.Group className="mb-3">
        <Form.Label>Submission Type</Form.Label>
        <Form.Select>
          <option>Online</option>
          <option>Paper</option>
          <option>External Tool</option>
        </Form.Select>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Online Entry Options</Form.Label>
        <div>
          <Form.Check type="checkbox" label="Text Entry" />
          <Form.Check type="checkbox" label="Website URL" defaultChecked />
          <Form.Check type="checkbox" label="Media Recordings" />
          <Form.Check type="checkbox" label="Student Annotation" />
          <Form.Check type="checkbox" label="File Upload" />
        </div>
      </Form.Group>
      
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Assign To</Form.Label>
            <Form.Control type="text" defaultValue="Everyone" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-13" />
          </Form.Group>
        </Col>
      </Row>
      
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Available from</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-06" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Available until</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-20" />
          </Form.Group>
        </Col>
      </Row>
      
      <Button variant="primary">Save</Button>
    </Container>
  );
}
