import { create } from './publication.js';

function printDetails(pub, URL) {
  pub.print();
  console.log(URL);
}

export function createPub(title, author, pubDate, URL) {
  let pub = create(title, author, pubDate);
  let publicAPI = {
    print() {
      printDetails(pub, URL);
    },
  };
  return publicAPI;
}
