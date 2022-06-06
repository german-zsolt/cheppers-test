import replace from "./replace";

describe("replace", () => {
  it("replaces a placeholder", () => {
    const text = "test is {placeholder}";
    const map = { placeholder: "ok" };

    const result = replace(text, map);

    expect(result).toBe("test is ok");
  });

  it("replaces multiple placeholders", () => {
    const text = "test is {placeholder1} if not {placeholder2}.";
    const map = { placeholder1: "good", placeholder2: "bad" };

    const result = replace(text, map);

    expect(result).toBe("test is good if not bad.");
  });

  it("replaces multiple occurrences", () => {
    const text = "{it} will {it} with {it}";
    const map = { it: "test" };

    const result = replace(text, map);

    expect(result).toBe("test will test with test");
  });
});
