import { utils } from './functions.js';
import { dataSource } from './data.js';
class BooksList {
  constructor() {
    this.initData();
    this.initFunctions();
    this.getSelectors();
    this.getTemplates();
    this.getElements();
    this.render();
    this.initActions();
  }

  initData() {
    this.data = dataSource.books;
  }

  initFunctions() {
    this.createDOMFromHTML = utils.createDOMFromHTML;
  }

  getSelectors() {
    this.select = {
      templateOf: {
        book: '#template-book',
      },
      booksPanel: {
        booksList: '.books-list',
        bookImage: 'book__image',
      },
      filtersForm: {
        filters: '.filters',
      },
    };
  }

  getTemplates() {
    this.templates = {
      book: Handlebars.compile(
        document.querySelector(this.select.templateOf.book).innerHTML
      ),
    };
  }

  getElements() {
    this.booksList = document.querySelector(this.select.booksPanel.booksList);
    this.filters = document.querySelector(this.select.filtersForm.filters);
    this.booksImages = document.querySelectorAll(
      this.select.booksPanel.bookImage
    );
  }

  render() {
    for (const book of this.data) {
      const ratingBgc = this.determineRatingBgc(book.rating);
      const ratingWidth = book.rating * 10;
      book.ratingWidth = ratingWidth;
      book.ratingBgc = ratingBgc;
      const generatedHTML = this.templates.book(book);
      const generatedDOM = this.createDOMFromHTML(generatedHTML);
      this.booksList.appendChild(generatedDOM);
    }
  }

  addBookToFavorite(e) {
    e.preventDefault();
    const bookImage = e.target.offsetParent;

    if (bookImage.classList.contains(this.select.booksPanel.bookImage)) {
      this.bookId = bookImage.getAttribute('data-id');
      this.favoriteBooksContainbookId = this.favoriteBooks.indexOf(this.bookId);
      bookImage.classList.toggle('favorite');

      if (
        this.favoriteBooksContainbookId === -1 &&
        bookImage.classList.contains('favorite')
      ) {
        this.favoriteBooks.push(this.bookId);
      } else if (!bookImage.classList.contains('favorite')) {
        this.favoriteBooks.splice(this.favoriteBooksContainbookId, 1);
      }
    }
  }

  initActions() {
    this.favoriteBooks = [];
    this.filtersArray = [];

    this.booksList.addEventListener('dblclick', (e) => {
      this.addBookToFavorite(e);
    });
    this.filters.addEventListener('click', (e) => {
      this.filterBooks(e);
    });
  }

  hideBook() {
    let shouldBeHidden = false;
    for (const book of this.data) {
      for (const filter of this.filtersArray) {
        if (!book.details[filter]) {
          shouldBeHidden = true;
          break;
        }
      }
      if (shouldBeHidden) {
        document
          .querySelector('.book__image[data-id="' + book.id + '"]')
          .classList.add('hidden');
      } else if (!shouldBeHidden) {
        document
          .querySelector('.book__image[data-id="' + book.id + '"]')
          .classList.remove('hidden');
      }
    }
  }

  filterBooks(e) {
    const filtersArrayContainFilter = this.filtersArray.indexOf(e.target.value);
    const targetIsFilterCheckboxInput =
      e.target.name == 'filter' &&
      e.target.tagName == 'INPUT' &&
      e.target.type == 'checkbox';

    if (targetIsFilterCheckboxInput) {
      if (e.target.checked) {
        this.filtersArray.push(e.target.value);
      } else if (!e.target.checked) {
        this.filtersArray.splice(filtersArrayContainFilter, 1);
      }
      this.hideBook();
    }
  }

  determineRatingBgc(rating) {
    let background = '';
    if (rating < 6) {
      background = 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)';
    } else if (rating > 6 && rating <= 8) {
      background = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
    } else if (rating > 8 && rating <= 9) {
      background = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
    } else if (rating > 9) {
      background = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
    }
    return background;
  }
}

new BooksList();
