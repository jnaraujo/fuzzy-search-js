import { describe, expect, test } from "vitest";
import { isAlphanumeric, trigram, fast_trigram } from "./trigram";

describe("trigram", () => {
  test("word 'cat'", () => {
    expect(trigram("cat").sort()).toEqual(["  c", " ca", "at ", "cat"].sort());
  });

  test("letter 'a'", () => {
    expect(trigram("a").sort()).toEqual(["  a", " a "].sort());
  });

  test("empty letter", () => {
    expect(trigram("").sort()).toEqual([].sort());
  });

  test("word ' a'", () => {
    expect(trigram(" a").sort()).toEqual(["  a", " a "].sort());
  });

  test("word 'abc'", () => {
    expect(trigram("abc").sort()).toEqual(["  a", " ab", "abc", "bc "].sort());
  });

  test("word 'foo|bar'", () => {
    expect(trigram("foo|bar").sort()).toEqual(
      ["  b", "  f", " ba", " fo", "ar ", "bar", "foo", "oo "].sort(),
    );
  });

  test("word 'ab-ac-ad'", () => {
    expect(trigram("ab-ac-ad").sort()).toEqual(
      ["  a", " ab", " ac", " ad", "ab ", "ac ", "ad "].sort(),
    );
  });

  test("word 'AbacaTe'", () => {
    expect(trigram("AbacaTe").sort()).toEqual(
      ["  a", " ab", "aba", "aca", "ate", "bac", "cat", "te "].sort(),
    );
  });

  test("phrase 'javascript is a mess'", () => {
    expect(trigram("javascript is a mess").sort()).toEqual(
      [
        "  a",
        "  i",
        "  j",
        "  m",
        " a ",
        " is",
        " ja",
        " me",
        "asc",
        "ava",
        "cri",
        "ess",
        "ipt",
        "is ",
        "jav",
        "mes",
        "pt ",
        "rip",
        "scr",
        "ss ",
        "vas",
      ].sort(),
    );
  });
});

describe("fast_trigram", () => {
  test("word 'cat'", () => {
    expect(fast_trigram("cat").sort()).toEqual(
      ["  c", " ca", "at ", "cat"].sort(),
    );
  });

  test("empty letter", () => {
    expect(fast_trigram("").sort()).toEqual([].sort());
  });

  test("word 'abc'", () => {
    expect(fast_trigram("abc").sort()).toEqual(
      ["  a", " ab", "abc", "bc "].sort(),
    );
  });

  test("word 'AbacaTe'", () => {
    expect(fast_trigram("AbacaTe").sort()).toEqual(
      ["  a", " ab", "aba", "aca", "ate", "bac", "cat", "te "].sort(),
    );
  });
});

describe("isAlphaNumeric", () => {
  test("alpha", () => {
    expect(isAlphanumeric("a".charCodeAt(0))).toBeTruthy();
    expect(isAlphanumeric("n".charCodeAt(0))).toBeTruthy();
    expect(isAlphanumeric("z".charCodeAt(0))).toBeTruthy();
    expect(isAlphanumeric("h".charCodeAt(0))).toBeTruthy();
  });
  test("numeric", () => {
    expect(isAlphanumeric("5".charCodeAt(0))).toBeTruthy();
    expect(isAlphanumeric("12".charCodeAt(0))).toBeTruthy();
    expect(isAlphanumeric("999".charCodeAt(0))).toBeTruthy();
    expect(isAlphanumeric("3123123".charCodeAt(0))).toBeTruthy();
  });

  test("non alphanumeric", () => {
    expect(isAlphanumeric("-".charCodeAt(0))).toBeFalsy();
    expect(isAlphanumeric("|".charCodeAt(0))).toBeFalsy();
    expect(isAlphanumeric(",".charCodeAt(0))).toBeFalsy();
    expect(isAlphanumeric("!".charCodeAt(0))).toBeFalsy();
  });
});
