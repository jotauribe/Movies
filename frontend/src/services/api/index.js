import axios from 'axios';

const API_URL = 'https://localhost:3000/v1/api';

const STATIC_DATA = [
  {
    id: 450465,
    title: 'Glass',
    overview:
      'In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.',
    release_date: '2019-01-16',
    poster: 'https://image.tmdb.org/t/p/w300//svIDTNUoajS8dLEo7EosxvyAsgJ.jpg'
  },
  {
    id: 428078,
    title: 'Mortal Engines',
    overview:
      'Set in a world many thousands of years in the future. Earth’s cities now roam the globe on huge wheels, devouring each other in a struggle for ever diminishing resources. On one of these massive Traction Cities, Tom Natsworthy has an unexpected encounter with a mysterious young woman from the Outlands who will change the course of his life forever.',
    release_date: '2018-12-05',
    poster: 'https://image.tmdb.org/t/p/w300//uXJVpPXxZO4L8Rz3IG1Y8XvZJcg.jpg'
  },
  {
    id: 424694,
    title: 'Bohemian Rhapsody',
    overview:
      "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
    release_date: '2018-10-24',
    poster: 'https://image.tmdb.org/t/p/w300//gbmkFWdtihe1VfydTDsieQ6VfGL.jpg'
  },
  {
    id: 297802,
    title: 'Aquaman',
    overview:
      "Once home to the most advanced civilization on Earth, the city of Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people -- and then the surface world. Standing in his way is Aquaman, Orm's half-human, half-Atlantean brother and true heir to the throne. With help from royal counselor Vulko, Aquaman must retrieve the legendary Trident of Atlan and embrace his destiny as protector of the deep.",
    release_date: '2018-12-07',
    poster: 'https://image.tmdb.org/t/p/w300//5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg'
  },
  {
    id: 522681,
    title: 'Escape Room',
    overview:
      'Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.',
    release_date: '2019-01-03',
    poster: 'https://image.tmdb.org/t/p/w300//8yZAx7tlKRZIg7pJfaPhl00yHIQ.jpg'
  },
  {
    id: 480530,
    title: 'Creed II',
    overview:
      "Follows Adonis Creed's life inside and outside of the ring as he deals with new found fame, issues with his family, and his continuing quest to become a champion.",
    release_date: '2018-11-21',
    poster: 'https://image.tmdb.org/t/p/w300//v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg'
  },
  {
    id: 424783,
    title: 'Bumblebee',
    overview:
      'On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.',
    release_date: '2018-12-15',
    poster: 'https://image.tmdb.org/t/p/w300//fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg'
  },
  {
    id: 401469,
    title: 'Widows',
    overview:
      "A police shootout leaves four thieves dead during an explosive armed robbery attempt in Chicago. Their widows have nothing in common except a debt left behind by their spouses' criminal activities. Hoping to forge a future on their own terms, they join forces to pull off a heist.",
    release_date: '2018-11-06',
    poster: 'https://image.tmdb.org/t/p/w300//tvmPiTShsfp4vSUBFsCHYaX9M7i.jpg'
  },
  {
    id: 504172,
    title: 'The Mule',
    overview:
      'A 90 year old horticulturalist and Korean War veteran is caught transporting $3 million worth of cocaine through Illinois for a Mexican drug cartel.',
    release_date: '2018-12-14',
    poster: 'https://image.tmdb.org/t/p/w300//t0idiLMalKMj2pLsvqHrOM4LPdQ.jpg'
  },
  {
    id: 483906,
    title: 'Polar',
    overview:
      'When a retiring assassin realizes he is the target of a hit, he winds up back in the game going head to head with a gang of younger, ruthless killers.',
    release_date: '2019-01-25',
    poster: 'https://image.tmdb.org/t/p/w300//qOBEpKVLl8Q9CZScbOcRRVISezV.jpg'
  },
  {
    id: 454294,
    title: 'The Kid Who Would Be King',
    overview:
      'Alex thinks he’s just another nobody, until he stumbles upon the mythical Sword in the Stone, Excalibur. Now, he must unite his friends and enemies into a band of knights and, together with the legendary wizard Merlin, take on the wicked enchantress Morgana. With the future at stake, Alex must become the great leader he never dreamed he could be.',
    release_date: '2019-01-16',
    poster: 'https://image.tmdb.org/t/p/w300//aWENxGrJmXmHvifG6x2aYnpovXI.jpg'
  },
  {
    id: 452832,
    title: 'Serenity',
    overview:
      'Baker Dill is a fishing boat captain leading tours off a tranquil, tropical enclave called Plymouth Island. His quiet life is shattered, however, when his ex-wife Karen tracks him down with a desperate plea for help.',
    release_date: '2019-01-24',
    poster: 'https://image.tmdb.org/t/p/w300//hgWAcic93phg4DOuQ8NrsgQWiqu.jpg'
  },
  {
    id: 332562,
    title: 'A Star Is Born',
    overview:
      "Seasoned musician Jackson Maine discovers — and falls in love with — struggling artist Ally. She has just about given up on her dream to make it big as a singer — until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",
    release_date: '2018-10-03',
    poster: 'https://image.tmdb.org/t/p/w300//wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg'
  },
  {
    id: 567860,
    title: 'Fyre',
    overview:
      'He promised supermodels and yachts, but delivered tents and cheese sandwiches. How one man engineered a music festival disaster.',
    release_date: '2019-01-18',
    poster: 'https://image.tmdb.org/t/p/w300//yFsP0BAJhAH3RTXCAnGvI1CtaUb.jpg'
  },
  {
    id: 166428,
    title: 'How to Train Your Dragon: The Hidden World',
    overview:
      'As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away.  When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.',
    release_date: '2019-01-03',
    poster: 'https://image.tmdb.org/t/p/w300//ij0xoc13hGhrYIlXGGuPXWTh3vi.jpg'
  },
  {
    id: 433249,
    title: 'IO',
    overview:
      "As a young scientist searches for a way to save a dying Earth, she finds a connection with a man who's racing to catch the last shuttle off the planet.",
    release_date: '2019-01-18',
    poster: 'https://image.tmdb.org/t/p/w300//utH781EwjzzXQC6fZUO3cw8L5Ht.jpg'
  },
  {
    id: 460321,
    title: 'Close',
    overview:
      'A counter-terrorism expert takes a job protecting a young heiress. After an attempted kidnapping puts both of their lives in danger, they must flee.',
    release_date: '2019-01-18',
    poster: 'https://image.tmdb.org/t/p/w300//4kjUGqPIv6kpxJUvjmeQX7nQpKd.jpg'
  },
  {
    id: 324857,
    title: 'Spider-Man: Into the Spider-Verse',
    overview:
      'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',
    release_date: '2018-12-07',
    poster: 'https://image.tmdb.org/t/p/w300//laMM4lpQSh5z6KIBPwWogkjzBVQ.jpg'
  },
  {
    id: 299536,
    title: 'Avengers: Infinity War',
    overview:
      'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
    release_date: '2018-04-25',
    poster: 'https://image.tmdb.org/t/p/w300//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'
  },
  {
    id: 369972,
    title: 'First Man',
    overview:
      'A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.',
    release_date: '2018-10-11',
    poster: 'https://image.tmdb.org/t/p/w300//i91mfvFcPPlaegcbOyjGgiWfZzh.jpg'
  }
];

export const getTitles = async ({ query, sort, page }) => {
  const params = [];
  if (query) params.push(`term=${query}`);
  if (sort) params.push(`sort=${sort}`);
  if (page) params.push(`page=${page}`);

  const { data } = await axios.get(`${API_URL}/movies?${params.join('&')}`);

  return data;
};

export const getFakedMovies = () => STATIC_DATA;
