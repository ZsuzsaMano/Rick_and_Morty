//selectors

const table = document.getElementById('table');
const gender = document.getElementById('Gender');
const range = document.getElementById('myRange');
const species = document.querySelectorAll('input[name="species"]')
const characters = document.querySelectorAll('input[type=checkbox]');
const input = document.querySelectorAll('input, select');

const endpoint = `https://rickandmortyapi.com/api/character/?page=1`;
fetch(endpoint)
  .then(response => {
    return response.json();
  })
  .then(data => {

    fillTable(data.results)

setEventListener(data)
  })

const  setEventListener = data =>{
  input.forEach(x=> x.addEventListener('change', () =>{
      clearTable()
fillTable(data.results)
  }))
}


//delete all rows apart from header
  const clearTable = () => {
const tableRows = table.rows.length-1
for(i=0; i<tableRows; i++)
    table.deleteRow(1); }



      //filter by choosen form value

      const isCharacter = item =>{
        //get value from form
        let characterValues = []
        const checkedCharacters = document.querySelectorAll('input[type=checkbox]:checked');
        checkedCharacters.forEach(checked => characterValues.push(checked.value))

        return (characterValues.includes('Morty') && item.name.includes('Morty') )||
      (characterValues.includes('Rick')&& item.name.includes('Rick'))||
        (characterValues.includes('Other')&& item.name.indexOf('Morty')===-1 && item.name.indexOf('Rick')===-1) ? true :false
    }

      const isGender = item => {
        //get value from form
      const genderValue = document.getElementById('Gender').value;
      //filter data depending on value
      return  item.gender === genderValue || genderValue === 'all' ? true : false
      }

      const isSpecies = item =>{
        //get value from form
        const speciesValue = document.querySelector('input[name="species"]:checked').value;
        //filter item depending on value
        return  speciesValue === 'All' || item.species === speciesValue ? true :false}

      const isEpisode = item =>{
        //get value from form
        const episodesValue = document.getElementById("myRange").value
        //filter item depending on value
        return item.episode.length >= episodesValue ? true : false
}



const fillTable = arr => {
  arr.forEach((x) => {
    if(isEpisode(x)&&isGender(x)&&isSpecies(x)&&isCharacter(x)){
    //create first column and display names
    const row1 = table.insertRow(1);
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
  }});
};






// range slider value display
const slider = document.getElementById('myRange');
const numOfEpisodes = document.getElementById('numOfEpisodes');
numOfEpisodes.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  numOfEpisodes.innerHTML = this.value;
}
