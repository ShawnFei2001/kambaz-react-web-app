import { ListGroup, Button, Form, InputGroup } from "react-bootstrap";
import { BsPlus, BsSearch, BsGripVertical} from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdAssignment } from "react-icons/md";

export default function Assignments() {
  return (
    <div>
      <br /><br /><br /><br />
      <InputGroup className="mb-3 w-50">
        <InputGroup.Text className="bg-white">
          <BsSearch />
        </InputGroup.Text>
        <Form.Control placeholder="Search..." className="border" />
      </InputGroup>
      
      <div className="d-flex justify-content-end mb-3">
        <Button variant="light" className="me-2 border">
          <BsPlus /> Group
        </Button>
        <Button variant="danger">
          <BsPlus /> Assignment
        </Button>
      </div>

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS 40% of Total
          <ListGroup className="wd-lessons rounded-0">
            {["A1", "A2", "A3"].map((assignment, index) => (
              <ListGroup.Item key={index} className="wd-lesson p-3 ps-1 d-flex align-items-center border-start border-3 border-success">
                <BsGripVertical className="me-2 fs-3 text-secondary" />
                <MdAssignment className="me-2 fs-4" />
                <div className="flex-grow-1">
                  <a href={`#/Kambaz/Courses/CS101/Assignments/${index + 1}`} className="fw-bold text-dark text-decoration-none">
                    {assignment}
                  </a>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> | <strong> Not available until </strong> May {6 + index * 7} at 12:00am | <strong> Due </strong> May {13 + index * 7} at 11:59pm | 100 pts
                  </div>
                </div>
                {<span className="me-1 position-relative">
      <FaCheckCircle style={{ top: "2px" }} className="text-success me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
      <IoEllipsisVertical className="fs-4" />
    </span>}
              </ListGroup.Item>
            ))} 
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}