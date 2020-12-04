const apiKey = 'mrVh2iJLbiu4P9b78fPM3YIfmomUZhGblSzrWJnAfjsyNXDfJj';
const secret = 'CZ9JbVnaozKVwTCI6AX1opRPAeXTHgRZdN1sdgHG';

const token = {
  "token_type": "Bearer",
  "expires_in": 3600,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtclZoMmlKTGJpdTRQOWI3OGZQTTNZSWZtb21VWmhHYmxTenJXSm5BZmpzeU5YRGZKaiIsImp0aSI6IjMwMDc0ZTBhMzY3ZDM2YWMwNjA2M2Y5MGM0NDEwN2QxMTdmMmZhOWQ4NThkZDEzMDIzODhhYWMzYTlkMTk5YjQwYjY5MzRkMzFjMjJmNzQxIiwiaWF0IjoxNjA2NTA1Nzk0LCJuYmYiOjE2MDY1MDU3OTQsImV4cCI6MTYwNjUwOTM5NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.XHlZSxYuSTjhslCmEV8vyHcXyNVqlwzNx84O60FCJdENXnC2ufZ7JmRQrSL_bmpdJ5tJ-0rC14hwW6nWgQ0l4gwk4gOY1o7Jt1Cg3G9FC-f3Vy__yrsTLotuoh8pv12L8hfHtzOlNStTqpMHickIXre_KRQB_GhDlH5u9w2vD9JO1eFQuUKLLFNPTG2ztTKURRkOtcE7_cTw95H8rNPcEsh2Zaq8GRy441i5itnT1QfkYRcfikcayIENt_7pt_T30MO30dJlOPc_PMM3Av-sKbDBD-RuxrB8GM89R3_z9eiNItD05fi_mM_EiB14eM-_Qk5H3nY8M1EbHoOKfQhQSg"
}


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