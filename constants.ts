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
    "role": "Protagonist",
    "grade": "Psychic",
    "description": "A high school girl who develops psychokinetic powers.",
    "image": "https://picsum.photos/400/600?random=10"
  },
  {
    "id": "okarun",
    "name": "Ken Takakura (Okarun)",
    "role": "Protagonist",
    "grade": "Cursed Human",
    "description": "An alien geek cursed and powered up by Turbo Granny.",
    "image": "https://picsum.photos/400/600?random=11"
  },
  {
    "id": "seiko",
    "name": "Seiko Ayase",
    "role": "Ally",
    "grade": "Medium",
    "description": "Momo's cool grandmother and a powerful spirit medium.",
    "image": "https://picsum.photos/400/600?random=12"
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
