const endpoint = `http://openlibrary.org/authors/OL20187A/works.json`;
 fetch(endpoint)
    .then(response => {
     return response.json();
        })
        .then(data =>
        {
          console.log(data)

  //to display list of books on index.html
const books = document.getElementById('books');
const bookList = document.getElementById('book__list');
 data.entries.forEach(x=>{
   const li = document.createElement('li')
   li.innerHTML = x.title;
   bookList.appendChild(li)
 })

 const bookTable = document.getElementById(book__table);
        });
