export type ChapterType = "prologue" | "chapter" | "epilogue";

export interface ComicChapter {
  title: string;
  pages: number;
  type: ChapterType;
}

export interface Comic {
  author: string;
  artist: string;
  title: string;
  chapters: ComicChapter[];
}

export interface AudiobookChapter {
  title: string;
  duration: number;
  type: ChapterType;
}

export interface Audiobook {
  author: string;
  narrator: string;
  title: string;
  chapters: AudiobookChapter[];
}

export type Book = Comic | Audiobook;
export type Chapter = ComicChapter | AudiobookChapter;

export function getPrologueChapter<T extends Chapter>(
  chapters: Array<T>
): T | undefined {
  return chapters.find((chapter) => chapter.type === "prologue");
}

// export function getPrologue<T extends Book>(
//   book: T
// ): T["chapters"][0] | undefined {
//   return getPrologueChapter(book.chapters);
// }
