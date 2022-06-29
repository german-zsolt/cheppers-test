import { getAnsweredAll, getPagination, getCurrentQuestion } from "./helpers";

describe("Quiz/helpers", () => {
  const questions = {
    results: [
      { category: "category 1", question: "question 1" },
      { category: "category 2", question: "question 2" },
      { category: "category 3", question: "question 3" },
    ],
  };
  describe("getAnsweredAll", () => {
    test("one more answer needed", () => {
      const answers = [1, 2];

      const result = getAnsweredAll({ questions, answers });

      expect(result).toEqual({ answeredAll: false });
    });
    test("have enough answers", () => {
      const answers = [1, 2, 3];

      const result = getAnsweredAll({ questions, answers });

      expect(result).toEqual({ answeredAll: true });
    });
    test("more answers", () => {
      const answers = [1, 2, 3, 4];

      const result = getAnsweredAll({ questions, answers });

      expect(result).toEqual({ answeredAll: true });
    });
  });

  describe("getPagination", () => {
    test("no answers", () => {
      const answers = [];

      const result = getPagination({ questions, answers });

      expect(result).toEqual({ index: 1, total: 3 });
    });
    test("have answers", () => {
      const answers = [1, 2];

      const result = getPagination({ questions, answers });

      expect(result).toEqual({ index: 3, total: 3 });
    });
  });

  describe("getCurrentQuestion", () => {
    test("get the first question if no answer", () => {
      const answers = [];

      const result = getCurrentQuestion({ questions, answers });

      const expected = { category: "category 1", question: "question 1" };
      expect(result).toEqual(expected);
    });
    test("get the next question if there are answers", () => {
      const answers = [1];

      const result = getCurrentQuestion({ questions, answers });

      const expected = { category: "category 2", question: "question 2" };
      expect(result).toEqual(expected);
    });
    test("get empty strings if all questions answered", () => {
      const answers = [1, 2, 3];

      const result = getCurrentQuestion({ questions, answers });

      const expected = { category: "", question: "" };
      expect(result).toEqual(expected);
    });
    test("decode entities", () => {
      const questions = {
        results: [
          {
            category: "&quot;category&quot;",
            question: "&quot;question&quot;",
          },
        ],
      };
      const answers = [];

      const result = getCurrentQuestion({ questions, answers });

      const expected = { category: '"category"', question: '"question"' };
      expect(result).toEqual(expected);
    });
  });
});
