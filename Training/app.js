function Publication(title, author, pubDate) {
  let publicAPI = {
    print() {
      console.log(`
   Title: ${title}
   By: ${author}
   ${pubDate} 
   `);
    },
  };

  return publicAPI;
}

function Book(bookDetails) {
  let pub = Publication(
    bookDetails.title,
    bookDetails.author,
    bookDetails.pusblishedOn
  );

  let publicAPI = {
    print() {
      pub.print();
      console.log(`
   Publisher: ${bookDetails.publisher}
   ISBN: ${bookDetails.ISBN}
   `);
    },
  };
  return publicAPI;
}

function BlogPost(title, author, pubDate, URL) {
  let pub = Publication(title, author, pubDate);

  let publicAPI = {
    print() {
      pub.print();
      console.log(URL);
    },
  };
  return publicAPI;
}

let YDKJS = Book({
  title: "You Don't Know JS",
  author: 'Kyle Simpson',
  publishedOn: 'June 2014',
  publisher: "O'Reilly",
  ISBN: '123456-789',
});

YDKJS.print();

let forAgainstLet = BlogPost(
  'For and against let',
  'Kyle Sympson',
  'October 27, 2014',
  'https://jdacdjncdi'
);
forAgainstLet.print();
