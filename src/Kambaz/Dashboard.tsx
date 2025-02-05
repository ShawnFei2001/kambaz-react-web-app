import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

      <Row xs={1} md={5} className="g-4">
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/101/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="https://picsum.photos/262/142" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS101</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/102/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="https://picsum.photos/262/142" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS102</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/103/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="https://picsum.photos/262/142" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS103</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/104/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="https://picsum.photos/262/142" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS104</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/105/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="https://picsum.photos/262/142" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS105</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/106/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="https://picsum.photos/262/142" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS106</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/107/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="https://picsum.photos/262/142" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS107</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
        </Row>
      </div>
    </div>
);}
