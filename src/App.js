import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.scss';
import './App.css';

const App = () => {
  const API_URL = 'api/v2/affiliate/leads?api-key=ed38cf353283bc2600f24aebbd88c8d9e297d9a5';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      "goal_id": 2,
      "ip": "146.158.77.52",
      'firstname': formData.get('firstname'),
      'lastname': formData.get('lastname'),
      'phone': formData.get('phone'),
      'custom1': formData.get('country'),
      'birthday': formData.get('birthday')
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
      });

      if (response.ok) {
        event.target.reset();
      } else {
      }
    } catch (error) {
    }
  };

  return (
    <div className="App">
      <Container fluid="sm">
        <Form onSubmit={handleSubmit}>
          <Form.Text className="text-muted">
            Заполните анкету
          </Form.Text>

          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Ваше имя"
              name="firstname"
              aria-label="firstname"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Ваша фамилия"
              name="lastname"
              aria-label="lastname"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Номер телефона"
              name="phone"
              aria-label="phone"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-4" required>
            <Form.Select aria-label="country" name="country">
              <option>Ваше гражданство</option>
              <option value="Россия">Россия</option>
              <option value="Беларусь">Беларусь</option>
              <option value="Киргизия">Киргизия</option>
              <option value="Казахстан">Казахстан</option>
              <option value="Другое">Другое</option>
            </Form.Select>
          </InputGroup>

          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Дата рождения"
              name="birthday"
              aria-label="birthday"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Button variant="primary" type="submit">
            Отправить
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
