const endpoint = `http://openlibrary.org/authors/OL20187A/works.json`;
fetch(endpoint)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data)

    //to display list of books on index.html

    const bookTable = document.getElementById('book__table');

    data.entries.forEach(x => {
      const tr = document.createElement('TR')
      const td = document.createElement('TD')
      td.innerHTML = x.title;
      bookTable.appendChild(tr).appendChild(td)
    })
  });
