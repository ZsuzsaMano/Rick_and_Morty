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
          col5.innerHTML = x.episode.map(episode => episode.substring(40));
        }
      );
    };
      fillTable()

  });
