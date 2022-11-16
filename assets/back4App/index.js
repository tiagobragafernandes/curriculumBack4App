Parse.serverURL = "https://parseapi.back4app.com/";

Parse.initialize(
    "kaEz51fUwozqmRvj6IK5tMLjY6LlbCMpIXWj1w7e",
    "aclTwXnb7TBLEesQOOFcxHuayUpxgQa3tyjEeF1X"
  );

  const exp = document.getElementById("experiencias");

  (async () => {
    const experiences = Parse.Object.extend('experiences');
    const query = new Parse.Query(experiences);
    query.descending('createdAt');

    try {
      const results = await query.find();

      for (const object of results) {

        const title = object.get('title');
        const location = object.get('location');
        const startTime = object.get('startTime');
        const endTime = object.get('endTime');
        const description = object.get('description');
    
        const div = document.createElement('div');
        div.classList.add('espacamento-experiencias');
        div.innerHTML =
        `<h3 class="titulo-menor">&#10148; ${title}</h3>
        <h4 class="descricao-experiencias">• ${location} • ${startTime} – ${endTime}</h4>
        <p class="texto-sobre">${description}</p>
        `
        exp.appendChild(div);      
                       
      }
    } catch (error) {
      console.error('Error while fetching experiences', error);
    }
  })();