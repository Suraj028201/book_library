import React, { useEffect, useState } from 'react';
import { BookApi } from '../service/BookApi';
import BookCard from '../components/book-card/BookCard';
import NavBar from '../components/navbar/NavBar';
import './home-page.css';
import { Container } from 'react-bootstrap';
import Loader from '../components/loader/Spinner';

const HomePage = () => {

    const bookApi = new BookApi();
    const [books, setBooks] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    const [searchedBook, setSearchedBook] = useState([]);

    useEffect(() => {
        fetchBookList();
    }, [])

    const fetchBookList = () => {
        setShowSpinner(true);
        bookApi.fetchBookList().then((response) => {
            setShowSpinner(false);
            setBooks(response.data.reading_log_entries.slice(0,40));
        }).catch((error) => {
            setShowSpinner(false);
        })
    }

    const handleSearch = (text) => {
        setShowSpinner(true);
        bookApi.fetchSearchResult(text).then((response) => {
            setShowSpinner(false);
            setSearchedBook(response.data.docs);
        }).catch((error) => {
            setShowSpinner(false);
        })
    }

  return (
    <div className='home-page p-2'>
        <NavBar handleSearch={handleSearch} />
        <hr />
        <Container>
            <div className='welcome-msg'>Welcome Back, Bunny!</div>
            <div className='msg'>What Do You Want To Read Today?</div>
         </Container>
         {showSpinner ? <div className='d-flex justify-content-center'><Loader /> Wait...</div> : <div className='mt-2'>
            <BookCard books={books} searchedBook={searchedBook} />
        </div>}
    </div>
  )
}

export default HomePage;