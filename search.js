//selectors

const table = document.getElementById('table');
const gender = document.getElementById('Gender');
const range = document.getElementById('myRange');



//get values from form
let characterArray = []
const character = document.querySelectorAll('input[type=checkbox]:checked');
character.forEach(checked => characterArray.push(checked.value))

const genderValue = document.getElementById('Gender').value;
const speciesValue = document.querySelector('input[name="species"]:checked').value;
const episodesValue = document.getElementById("myRange").value

console.log(speciesValue + ', ' + genderValue + ', ' + episodesValue + ', ' + characterArray)


const endpoint = `https://rickandmortyapi.com/api/character/?page=1`;
fetch(endpoint)
  .then(response => {
    return response.json();
  })
  .then(data => {

    fillTable(data.results)

    console.log(filterGender(data.results))

    console.log(filterCharacter(data.results))

    console.log(filterSpecies(data.results));

    console.log(filterEpisode(data.results));

    //eventListener
    range.addEventListener('change', () => {
      fillTable(filterEpisode(data.results));
    })

    gender.addEventListener('change', ()=>{
      fillTable(filterGender(data.results))
    })


  })


      //filter by choosen form value

      const filterCharacter = data =>{
      return data.filter(x => x.name.includes('Morty'))}

      const filterGender = data => {
      return  data.filter(x => x.gender === genderValue)
      }

      const filterSpecies = data =>{
        return data.filter(x => x.species === speciesValue)}

      const filterEpisode = data =>{
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
