//get values from form
let characterArray = []
const character = document.querySelectorAll('input[type=checkbox]:checked');
character.forEach(checked=> characterArray.push(checked.value))

const gender = document.getElementById('Gender').value;
const species = document.querySelector('input[name="species"]:checked').value;
const episodes = document.getElementById("myRange").value

console.log(species + ', '+gender + ', '+ episodes +', ' + characterArray)


const endpoint = `https://rickandmortyapi.com/api/character/?page=1`;
fetch(endpoint)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data.results)


    //selectors

    const table = document.getElementById('table');


    const fillTable = () => {
      data.results.forEach((x, i) => {

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
        }
      );
    };
      fillTable()

  });



// range slider value display
  const slider = document.getElementById("myRange");
const numOfEpisodes = document.getElementById("numOfEpisodes");
numOfEpisodes.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  numOfEpisodes.innerHTML = this.value;
}
