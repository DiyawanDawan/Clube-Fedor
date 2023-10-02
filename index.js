// const data = {
//     error: false,
//     message: 'success',
//     books: [
//       {
//         'id': 1,
//         'title': 'Laskar Pelangi',
//         'author': 'Andrea Hirata'
//       },
//       {
//         'id': 2,
//         'title': 'Filosofi Kopi',
//         'author': 'Dewi Lestari'
//       },
//       {
//         'id': 3,
//         'title': 'Clean Code',
//         'author': 'Robert C Martin'
//       }
//     ]
// };

// const jsonString = JSON.stringify(data);
// data.books.forEach((jsonString, index) => {
//     console.log(`${index + 1} ${jsonString.title} (${jsonString.author})`);
// })
// // console.log(jsonString);

const jsonString = `{
     "error": false,
  "message": "success",
  "books": [
    {
      "id": 1,
      "title": "Laskar Pelangi",
      "author": "Andrea Hirata"
    },
    {
      "id": 2,
      "title": "Filosofi Kopi",
      "author": "Dewi Lestari"
    },
    {
      "id": 3,
      "title": "Clean Code",
      "author": "Robert C Martin"
    }
  ]
}`;

const data = JSON.parse(jsonString);
console.log(data);
// data.books.forEach((book, index) => {
//        console.log(`${index + 1 }. ${book.title} (${book.author})`);
// });

// const data = {
//   error: false,
//   message: "success",
//   books: [
//     {
//       id: 1,
//       title: "Laskar Pelangi",
//       author: "Andrea Hirata",
//     },
//     {
//       id: 2,
//       title: "Filosofi Kopi",
//       author: "Dewi Lestari",
//     },
//     {
//       id: 3,
//       title: "Clean Code",
//       author: "Robert C Martin",
//     },
//   ],
// };

// console.log(`error ${data.error}`);
// console.log('Daftar buku');
// data.books.forEach((book, index) => {
//     console.log(`${index + 1 }. ${book.title} (${book.author})`);
// })
