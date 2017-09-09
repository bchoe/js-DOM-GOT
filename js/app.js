/*Use the following data below to create cards for each Game of Thrones house (and if you aren't watching GOT, then you are missing out on half of life!) that will display in the browswer. Each card should have the following information:

image of the crest
House: House of Arryn
Region: The Vale of Arryn
Lord: Robin Arryn
Allegiance: House Stark

Please also use CSS to style up your work

*/

var kingdoms = [{ crest: "https://vignette4.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153", house: "House Arryn",region: "The Vale of Arryn",lord: "Robin Arryn", allegiance: "House Stark"},{ crest: "https://vignette1.wikia.nocookie.net/gameofthrones/images/e/e6/House-Frey-Main-Shield.PNG/revision/latest?cb=20170523011255", house: "House Frey",region: "The Riverlands",lord: "Unknown", allegiance: "House Lanister"},{ crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836", house: "House Greyjoy",region: "Iron Islands",lord: "King Euron Greyjoy", allegiance: "Sovereign"},{ crest: "http://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/250px-House_Lannister.svg.png", house: "House Lannister",region: "The Crownlands",lord: "Queen Cersei", allegiance: "House Targaryen"},{ crest: "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142", house: "House Stark",region: "The North",lord: "King Jon Snow", allegiance: "Sovereign"},{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320", house: "House Targaryen",region: "Dragonstone",lord: "Queen Daenerys", allegiance: "Sovereign"}];

for (var i = 0; i < kingdoms.length; i++){

  var cards = document.createElement('div');
  cards.className = 'cards';
  main.appendChild(cards);

  var crest = document.createElement('IMG');
  crest.className = 'crest';
  crest.src = kingdoms[i].crest;
  cards.appendChild(crest);

  var house = document.createElement('div');
  house.className = 'house';
  house.innerHTML = kingdoms[i].house;
  cards.appendChild(house);

  var region = document.createElement('div');
  region.className = 'region';
  region.innerHTML = kingdoms[i].region;
  cards.appendChild(region);

  var lord = document.createElement('div');
  lord.className = 'lord';
  lord.innerHTML = kingdoms[i].lord;
  cards.appendChild(lord);

  var allegiance = document.createElement('div');
  allegiance.className = 'allegiance';
  allegiance.innerHTML = kingdoms[i].allegiance;
  cards.appendChild(allegiance);

}

  var newEvent = document.getElementsByClassName('cards');
  for (var i = 0; i < newEvent.length; i++){
    newEvent[i].addEventListener('click',openbody);
  }

  function openbody(){
    var msg = this.querySelectorAll('.crest')[0];
    if (msg.style.display === 'none'){
      msg.style.display = 'block';
    }else{
      msg.style.display = 'none';
    }
  }
  openBody();





