const endpoint = `https://rickandmortyapi.com/api/character/?page=1`;
fetch(endpoint)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data.results)

    //selectors

    const characters = document.getElementById('home__characters');
    const homeGallery = document.getElementById('home__gallery');

    data.results.forEach(x =>
      //display only characters staring in more then 5 episodes

      {
        //only characters who starts in more than 5 episodes
        if (x.episode.length > 5) {
          const li = document.createElement('li');
          //name of character to list
          li.innerHTML = x.name
          characters.appendChild(li)

          //frame for the images
          const frame = document.createElement('DIV');
          frame.classList.add('main-character__frame')
          homeGallery.appendChild(frame)

          //image of main characters
          const oImg = document.createElement("img");
          oImg.setAttribute('src', x.image);
          oImg.setAttribute('alt', 'na');
          oImg.setAttribute('height', '100px');
          oImg.setAttribute('width', 'auto');
          frame.appendChild(oImg);

          //text for each image with name of character
          const cardText = document.createElement('p')
          cardText.classList.add('card-text')
          cardText.innerHTML = x.name
          frame.appendChild(cardText)
        }
      }
    )
  })