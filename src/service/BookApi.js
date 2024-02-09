import axios from "axios";

export class BookApi {

    BASE_URL = 'https://openlibrary.org';

    fetchBookList = () => {
        return axios.get(`${this.BASE_URL}/people/mekBot/books/already-read.json`);
    }

    fetchSearchResult = (text) => {
        return axios.get(`${this.BASE_URL}/search.json?q=${text}`)
    }
}