//selectors

const table = document.getElementById('table');
const gender = document.getElementById('Gender');
const range = document.getElementById('myRange');
const species = document.querySelectorAll('input[name="species"]')
const characters = document.querySelectorAll('input[type=checkbox]');


const endpoint = `https://rickandmortyapi.com/api/character/?page=1`;
fetch(endpoint)
  .then(response => {
    return response.json();
  })
  .then(data => {

    fillTable(data.results)

setEventListener(data)


    console.log(filterCharacter(data.results));

    //eventListener



  })

const  setEventListener = data =>{
  range.addEventListener('change', () => {
      clearTable();
    fillTable(filterEpisode(data.results));
  })

  gender.addEventListener('change', ()=>{
    clearTable();
    if(filterGender(data.results)){
    fillTable(filterGender(data.results))
  }else{
    fillTable(data.results);
  }
  })

  species.forEach(x => x.addEventListener('change', ()=>{
    clearTable();
    if(filterSpecies(data.results)){
    fillTable(filterSpecies(data.results))
  }else{
    fillTable(data.results);
  }
  }))
}
//delete all rows apart from header
  const clearTable = () => {
const tableRows = table.rows.length-1
for(i=0; i<tableRows; i++)
    table.deleteRow(1); }



      //filter by choosen form value

      const filterCharacter = data =>{
        //get value from form
        let characterValues = []
        const checkedCharacters = document.querySelectorAll('input[type=checkbox]:checked');
        checkedCharacters.forEach(checked => characterValues.push(checked.value))

      data.filter(x => x.name.includes('Morty'))}

      const filterGender = data => {
        //get value from form
      const genderValue = document.getElementById('Gender').value;
      //filter data depending on value
      return genderValue === 'all' ? data: data.filter(x => x.gender === genderValue)
      }

      const filterSpecies = data =>{
        //get value from form
        const speciesValue = document.querySelector('input[name="species"]:checked').value;
        //filter data depending on value
        return  speciesValue === 'All' ? data:data.filter(x => x.species === speciesValue)}

      const filterEpisode = data =>{
        //get value from form
        const episodesValue = document.getElementById("myRange").value
        //filter data depending on value
        return data.filter(x => x.episode.length >= episodesValue)
}




const fillTable = arr => {
  arr.forEach((x, i) => {

    //create first column and display names
    const row1 = table.insertRow(i + 1);
    const col1 = row1.insertCell(0);


    col1.innerHTML = x.name

    //create second column and display images

    const col2 = row1.insertCell(1);

    const oImg = document.createElement('img');
    oImg.setAttribute('src', x.image);
    oImg.setAttribute('alt', 'na');
    oImg.setAttribute('height', '100px');
    oImg.setAttribute('width', 'auto');
    col2.appendChild(oImg);

    //create third column and display gender
    const col3 = row1.insertCell(2);
    col3.innerHTML = x.gender;

    //create third column and display gender
    const col4 = row1.insertCell(3);
    col4.innerHTML = x.species;

    //create third column and display gender
    const col5 = row1.insertCell(4);
    col5.innerHTML = x.episode.map(episode => episode.substring(40)).join(', ');
  });
};






// range slider value display
const slider = document.getElementById('myRange');
const numOfEpisodes = document.getElementById('numOfEpisodes');
numOfEpisodes.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  numOfEpisodes.innerHTML = this.value;
}
