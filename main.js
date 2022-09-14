// Mobile Menu
const menu = document.querySelector('#union');
const navigation = document.querySelector('nav');
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navigation.classList.toggle('nav-toggle');
});

navigation.addEventListener('click', (event) => {
  const { target } = event;
  if (target.nodeName === 'NAV' || target.nodeName === 'DIV') { navigation.classList.remove('nav-toggle'); }
});
window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navigation.classList.remove('nav-toggle');
});

// Featured Speakers

const speakers = [
  {
    id: '1',
    name: 'Caroline Mulundu',
    description: 'University of Namibia Staff and Software Developer',
    image: 'images/caroline.jpg',
    text: 'Caroline Mulundu won the best award at the 18th common wealth International conference on e-Business for an app she developed.',
  },

  {
    id: '2',
    name: ' Victoria Hasheela-Mufeti ',
    description: 'University of Namibia Senior Lecturer',
    image: 'images/victoria.jpg',
    text: 'Victoria is a Head of IT Department, and a senior lecturer at the University of Namibia',
  },
  {
    id: '3',
    name: 'Jessica Upani',
    description: 'Pyladies Global Council Excecutive',
    image: 'images/jessica.jpg',
    text: 'Jessica is a mathematician, coder and an educator. She is the lead of python Namibia Society and a global Python community volunteer',
  },
  {
    id: '4',
    name: 'Elise Kasai',
    description: 'Software Developer at Namibia Broadcasting Corporation (NBC)',
    image: 'images/elise.jpg',
    text: 'Elise is an aspiring young and recent graduate from the University of Namibia. She was the president of UNAM Computer Society in 2019', },
  {
    id: '5',
    name: 'Annastasia Shipepe',
    description: 'University of Namibia Senior Lecturer',
    image: 'images/annastasia.jpg',
    text: 'Annastasia is a team leader of the University of Namibia Robotic Club. She is the co-founder and founding vice president of the Internet Society Namibia Chapter',
  },
  {
    id: '6',
    name: 'Selma Hamutenya',
    description: 'Full stack Developer & student at Microverse',
    image: 'images/selma.jpg',
    text: 'Selma is an aspiring, young and recent graduate in Computer Science from the University of Namibia, a member of PyData Namibia, Pycon Namibia, PyLadies Namibia and UNAM Robotics Club',
  },
];

for (let i = 0; i <= speakers.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('featured-speakers');
  card.innerHTML = `
   <div class="speaker-picture">
   <img src="${speakers[i].image}"
   alt="${speakers[i].name}"/>

   <div class="speaker-info">
   <h2 class="speaker-name">${speakers[i].name}</h2>
   <p class="speaker-job">${speakers[i].description}</p>
   <hr>
   <p class="about-speaker">${speakers[i].text}</p>
  `;
  document.querySelector('.speakers-container').appendChild(card);
}
