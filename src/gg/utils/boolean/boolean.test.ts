import { isWebURL, isEmail } from "./boolean";

describe("isWebURL", () => {
  test("returns true for valid URL formats", () => {
    const validUrls = [
      "http://www.example.com",
      "https://www.example.com",
      "http://www.example.ai",
      "https://www.example.gg",
      "http://k.kakaocdn.net/dn/gUZvo/btrXEB3N8n4/K3PepeVLKJt6hykSQNVlNk/img_l.jpg",
    ];
    validUrls.forEach((url) => {
      expect(isWebURL(url)).toBe(true);
    });
  });

  test("returns false for invalid URL formats", () => {
    const invalidUrls = [
      "ftp://www.example.com",
      "invalid.url",
      "",
      "www.ex ample.com",
      "example..com",
      "http:////////www.navmer.co",
      "https://////w.nae.i",
      "https:/w.com/chat/df4fddd8-4825-a72f-4fdfdd6e8961",
    ];
    invalidUrls.forEach((url) => {
      expect(isWebURL(url)).toBe(false);
    });
  });
});

describe("isEmail", () => {
  test("returns true for valid email addresses", () => {
    const validEmails = [
      "user@example.com",
      "user.name@example.com",
      "user+label@example.com",
    ];
    validEmails.forEach((email) => {
      expect(isEmail(email)).toBe(true);
    });
  });

  test("returns false for invalid email addresses", () => {
    const invalidEmails = [
      "user@example",
      "user@.com",
      "user@",
      "@example.com",
    ];
    invalidEmails.forEach((email) => {
      expect(isEmail(email)).toBe(false);
    });
  });
});
