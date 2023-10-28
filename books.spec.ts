import { describe, expect, test } from "@jest/globals";
import {
  Audiobook,
  Comic,
  /* getPrologue, */ getPrologueChapter,
} from "./books";

describe("get prologue", () => {
  test("works for comics", () => {
    const comic: Comic = {
      author: "Alan Moore",
      artist: "Dave Gibbons",
      title: "Watchmen",
      chapters: [
        {
          title: "At Midnight, All the Agents...",
          pages: 36,
          type: "prologue",
        },
        {
          title: "Absent Friends",
          pages: 36,
          type: "chapter",
        },
        {
          title: "The Judge of All the Earth",
          pages: 36,
          type: "chapter",
        },
        {
          title: "Watchmaker",
          pages: 36,
          type: "chapter",
        },
        {
          title: "Fearful Symmetry",
          pages: 36,
          type: "chapter",
        },
        {
          title: "The Abyss Gazes Also",
          pages: 36,
          type: "chapter",
        },
        {
          title: "A Brother to Dragons",
          pages: 36,
          type: "chapter",
        },
        {
          title: "Old Ghosts",
          pages: 36,
          type: "chapter",
        },
        {
          title: "The Darkness of Mere Being",
          pages: 36,
          type: "chapter",
        },
        {
          title: "Two Riders Were Approaching...",
          pages: 36,
          type: "chapter",
        },
        {
          title: "Look on My Works, Ye Mighty...",
          pages: 36,
          type: "chapter",
        },
        {
          title: "A Stronger Loving World",
          pages: 36,
          type: "epilogue",
        },
      ],
    };

    const prologue = getPrologueChapter(comic.chapters);

    expect(prologue?.pages).toEqual(36);
  });

  test("works for audiobooks", () => {
    const audiobook: Audiobook = {
      author: "Martha Wells",
      narrator: "Kevin R. Free",
      title: "Fugitive Telemetry",
      chapters: [
        {
          title: "Opening Credits",
          duration: 16,
          type: "prologue",
        },
        {
          title: "Chapter One",
          duration: 20 * 60 + 46,
          type: "chapter",
        },
        {
          title: "Chapter Two",
          duration: 18 * 60 + 40,
          type: "chapter",
        },
        {
          title: "Chapter Three",
          duration: 36 * 60 + 13,
          type: "chapter",
        },
        {
          title: "Chapter Four",
          duration: 30 * 60 + 20,
          type: "chapter",
        },
        {
          title: "Chapter Five",
          duration: 57 * 60 + 24,
          type: "chapter",
        },
        {
          title: "Chapter Six",
          duration: 29 * 60 + 9,
          type: "chapter",
        },
        {
          title: "Chapter Seven",
          duration: 39 * 60 + 11,
          type: "chapter",
        },
        {
          title: "Chapter Eight",
          duration: 32 * 60 + 24,
          type: "chapter",
        },
        {
          title: "End Credits",
          duration: 31,
          type: "epilogue",
        },
      ],
    };

    const prologue = getPrologueChapter(audiobook.chapters);

    expect(prologue?.duration).toEqual(16);
  });
});
