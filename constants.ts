import { Arc, Chapter, Character, Comment } from "./types";
import mangaData from "./scraped_4qji6e-dandadan.json";

// Dandadan serialization began on April 6, 2021
const SERIES_START = new Date("2021-04-06T00:00:00Z").getTime();
const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

export const MOCK_CHAPTERS: Chapter[] = [...mangaData.chapters]
  .sort((a, b) => b.chapter_number - a.chapter_number)
  .map(ch => ({
    id: String(ch.chapter_number),
    number: ch.chapter_number,
    title: ch.chapter_title,
    releaseDate: new Date(
      SERIES_START + (ch.chapter_number - 1) * MS_PER_WEEK
    ).toISOString(),
    pages: ch.image_urls,
  }));

export const CHARACTERS: Character[] = [
  {
    "id": "momo",
    "name": "Momo Ayase",
    "role": "Main",
    "grade": "Psychic Protagonist",
    "description": "A fierce and kind high school girl raised by a spirit medium grandmother, she unlocks powerful psychokinetic abilities allowing her to manipulate environmental auras.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b222594-24Jn7qlI5spH.png"
  },
  {
    "id": "okarun",
    "name": "Ken Takakura (Okarun)",
    "role": "Main",
    "grade": "Cursed Protagonist",
    "description": "An occult and alien geek who gets cursed by the Turbo Granny, gaining the ability to transform into a powerful, high-speed, melancholic spirit form.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b222593-qBqUvpodooAI.png"
  },
  {
    "id": "aira",
    "name": "Aira Shiratori",
    "role": "Main",
    "grade": "Acrobatic Silky Host",
    "description": "A popular high school girl with a savior complex who gains the ability to see spirits and later channels the acrobatic, flame-like hair powers of the Acrobatic Silky.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b245466-rd5I5mchZ3bv.png"
  },
  {
    "id": "jiji",
    "name": "Jin Enjouji (Jiji)",
    "role": "Main",
    "grade": "Evil Eye Host",
    "description": "Momo's energetic and athletic childhood friend who becomes possessed by the powerful and terrifying well-bound spirit known as the Evil Eye.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b258506-mMMInKyQq7ib.png"
  },
  {
    "id": "vamola",
    "name": "Vamola",
    "role": "Main",
    "grade": "Sumerian Alien",
    "description": "An alien girl from the Sumerian race who escapes to Earth seeking refuge, fighting alongside the group using a highly advanced, kaiju-like battle suit.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b289256-HEnb2zsSwsrF.png"
  },
  {
    "id": "seiko",
    "name": "Seiko Ayase",
    "role": "Supporting",
    "grade": "Spirit Medium (Grandma)",
    "description": "Momo's extremely cool, youthful-looking grandmother who is a legendary spirit medium, using local deity barrier magic to protect their town.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b234824-i3s64ueaBqGq.png"
  },
  {
    "id": "turbo-babaa",
    "name": "Turbo Babaa (Turbo Granny)",
    "role": "Supporting",
    "grade": "Yokai Ally",
    "description": "A notoriously fast, foul-mouthed yokai who cursed Okarun. After being defeated, her spirit is bound to a lucky cat doll, acting as a reluctant guide.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b239956-Fok0Pl3rNOEL.png"
  },
  {
    "id": "acrobatic-sarasara",
    "name": "Acrobatic Sarasara",
    "role": "Supporting",
    "grade": "Yokai",
    "description": "A tragic yokai bound by maternal love who possesses elastic hair and high-speed acrobatics, she later passes her powers on to Aira.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b245467-xnhV5etjTvHZ.png"
  }
];

export const ARCS: Arc[] = [
  {
    "id": "granny",
    "title": "Turbo Granny Arc",
    "description": "Momo and Okarun deal with the curse of the Turbo Granny.",
    "chapterStart": 1,
    "chapterEnd": 10,
    "image": "https://picsum.photos/600/300?random=20"
  },
  {
    "id": "silky",
    "title": "Acrobatic Silky Arc",
    "description": "The team encounters the tragic ghost Acrobatic Silky.",
    "chapterStart": 11,
    "chapterEnd": 20,
    "image": "https://picsum.photos/600/300?random=21"
  }
];

export const MOCK_COMMENTS: Comment[] = [
  {
    "id": "1",
    "user": "Fanatic99",
    "content": "Momo is devouring everyone! What an absolute legend.",
    "date": "2 hours ago",
    "likes": 155
  },
  {
    "id": "2",
    "user": "SeriesFan",
    "content": "Ken is insane. Best character!",
    "date": "5 hours ago",
    "likes": 230
  },
  {
    "id": "3",
    "user": "Otaku",
    "content": "This manga is pure hype. The art is incredible.",
    "date": "1 day ago",
    "likes": 89
  }
];
