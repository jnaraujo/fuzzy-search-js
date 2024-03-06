import { describe, expect, test } from "vitest";
import { isAlphanumeric, trigram } from "./trigram";

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

  test("text lorem ipsim", () => {
    expect(
      trigram(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in dui at arcu efficitur vulputate. Vestibulum libero urna, fermentum quis dolor ac, fringilla gravida nisi.",
      ).sort(),
    ).toEqual(
      [
        "  a",
        "  c",
        "  d",
        "  e",
        "  f",
        "  g",
        "  i",
        "  l",
        "  n",
        "  p",
        "  q",
        "  s",
        "  u",
        "  v",
        " ac",
        " ad",
        " am",
        " ar",
        " at",
        " co",
        " do",
        " du",
        " ef",
        " el",
        " fe",
        " fr",
        " gr",
        " in",
        " ip",
        " li",
        " lo",
        " ni",
        " pr",
        " qu",
        " si",
        " ur",
        " ve",
        " vu",
        "ac ",
        "adi",
        "ame",
        "arc",
        "at ",
        "ate",
        "avi",
        "ber",
        "bul",
        "cin",
        "cit",
        "con",
        "cte",
        "cu ",
        "da ",
        "dip",
        "dol",
        "dui",
        "ect",
        "eff",
        "eli",
        "em ",
        "ent",
        "erm",
        "ero",
        "est",
        "et ",
        "etu",
        "fer",
        "ffi",
        "fic",
        "fri",
        "gil",
        "gra",
        "ibe",
        "ibu",
        "ici",
        "ida",
        "ill",
        "in ",
        "ing",
        "ipi",
        "ips",
        "is ",
        "isc",
        "isi",
        "it ",
        "itu",
        "la ",
        "lib",
        "lit",
        "lla",
        "lor",
        "lpu",
        "lum",
        "men",
        "met",
        "na ",
        "ng ",
        "ngi",
        "nis",
        "nse",
        "ntu",
        "oin",
        "olo",
        "ons",
        "or ",
        "ore",
        "pis",
        "pro",
        "psu",
        "put",
        "qui",
        "rav",
        "rcu",
        "rem",
        "rin",
        "rme",
        "rna",
        "ro ",
        "roi",
        "sci",
        "sec",
        "si ",
        "sit",
        "sti",
        "sum",
        "tat",
        "te ",
        "tet",
        "tib",
        "tum",
        "tur",
        "ui ",
        "uis",
        "ulp",
        "ulu",
        "um ",
        "ur ",
        "urn",
        "uta",
        "ves",
        "vid",
        "vul",
      ].sort(),
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
