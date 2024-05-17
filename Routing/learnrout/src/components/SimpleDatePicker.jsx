import { Form, Button } from 'react-bootstrap';

function SimpleDatePicker() {
   return (
      <Form>
         <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter your name" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="password">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control type="date" />
         </Form.Group>
         <Button variant="primary" type="submit">
            Submit
         </Button>
      </Form>
   );
}

export default SimpleDatePicker;
