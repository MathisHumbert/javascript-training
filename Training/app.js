class Publication {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }

  print() {
    console.log(`
    Title: ${this.title} 
    By: ${this.author} 
    ${this.pubDate}`);
  }
}

class Book extends Publication {
  constructor(bookDtails) {
    super(bookDtails.title, bookDtails.author, bookDtails.publishedOn);

    this.publisher = bookDtails.publisher;
    this.ISBN = bookDtails.ISBn;
  }

  print() {
    super.print();
    console.log(`Publisher: ${this.publisher} 
   ISBN: ${this.ISBN}`);
  }
}

class BlogPost extends Publication {
  constructor(title, author, pubDate, URL) {
    super(title, author, pubDate);
    this.URL = URL;
  }
  print() {
    super.print();
    console.log(`ISBN: ${this.URL}`);
  }
}

let YDKJS = new Book({
  title: "You Don't Know JS",
  author: 'Kyle Simpson',
  publishedOn: 'June 2014',
  publisher: "O'Reilly",
  ISBN: '123456-789',
});

YDKJS.print();

let forAgainstLet = new BlogPost(
  'For and against let',
  'Kyle Sympson',
  'October 27, 2014',
  'https://jdacdjncdi'
);
forAgainstLet.print();
