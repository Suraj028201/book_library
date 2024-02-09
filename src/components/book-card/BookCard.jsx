import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './book-card.css';

const BookCard = (props) => {

  const {books, searchedBook} = props;
  const [readBooks, setReadBooks] = useState([]);

  const handleReadClick = (index) => {
    return () => {
      console.log(readBooks.includes(index));
      if(readBooks.includes(index)){
        setReadBooks(readBooks.filter(item => item !== index));
      } else {
        setReadBooks((prev) => ([...prev, index]));
      }
    }
  }

  return (
  <Container>
    <Row xs={2} sm={3} md={4} lg={5}>
      {searchedBook.map((book, index) => ( // Create 4 cards
        <Col key={index} className='p-2 mb-4'>
          <Card className='book-card h-100'>
          <Card.Img className='book-cover' variant="top" src={`https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg`} />
            <Card.Body>
              <Card.Title className='book-title'>{book?.title}</Card.Title>
              <Card.Text className='d-flex justify-content-between'>
                <Card.Text className='book-auther'>
                  {book?.author_name}
                </Card.Text>
                <Card.Text className='book-auther'>
                  {book?.first_publish_year}
                </Card.Text>
              </Card.Text>
              <Card.Text className='d-flex justify-content-center'>
                <Button className={readBooks.includes(index)? 'read-book' : 'unread-book'} onClick={handleReadClick(index)}>
                  {readBooks.includes(index)? 'Read' : 'Unread'}
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {books.map((book, index) => ( // Create 4 cards
        <Col key={index} className='p-2 mb-4'>
          <Card className='book-card h-100'>
          <Card.Img className='book-cover' variant="top" src={`https://covers.openlibrary.org/b/id/${book?.work.cover_id}-M.jpg`} />
            <Card.Body>
              <Card.Title className='book-title'>{book?.work.title}</Card.Title>
              <Card.Text className='d-flex justify-content-between'>
                <Card.Text className='book-auther'>
                  {book?.work.author_names[0]}
                </Card.Text>
                <Card.Text className='book-auther'>
                  {book?.work.first_publish_year}
                </Card.Text>
              </Card.Text>
              <Card.Text className='d-flex justify-content-center'>
                <Button className={readBooks.includes(index)? 'read-book' : 'unread-book'} onClick={handleReadClick(index)}>
                  {readBooks.includes(index)? 'Read' : 'Unread'}
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default BookCard;