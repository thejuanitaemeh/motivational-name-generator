// Hard-coded motivational word list (A–Z)
// Words are positive and appropriate for a healthcare / NHS-style audience
const motivationalWords = {
  A: "Ambitious",
  B: "Brave",
  C: "Compassionate",
  D: "Dedicated",
  E: "Empathetic",
  F: "Focused",
  G: "Generous",
  H: "Hopeful",
  I: "Inspiring",
  J: "Joyful",
  K: "Kind",
  L: "Loving",
  M: "Mindful",
  N: "Nurturing",
  O: "Optimistic",
  P: "Passionate",
  Q: "Qualified",
  R: "Resilient",
  S: "Supportive",
  T: "Tenacious",
  U: "Unique",
  V: "Valiant",
  W: "Warm-hearted",
  X: "eXceptional",
  Y: "Youthful",
  Z: "Zealous",
};

/**
 * Generates a motivational acronym from a user's name.
 *
 * @param {string} name - The input name (e.g. "Juanita")
 * @returns {string} A formatted acronym where each letter maps to a positive word
 */
function generateMotivationalAcronym(name) {
  return name
    .toUpperCase()
    .split("")
    .filter((char) => /[A-Z]/.test(char))
    .map((letter) => `${letter} – ${motivationalWords[letter] || "Positive"}`)
    .join("\n");
}

module.exports = { generateMotivationalAcronym };

/*
 * Example invocation:
 *
 * console.log(generateMotivationalAcronym("Juanita"));
 *
 * Output:
 * J – Joyful
 * U – Unique
 * A – Ambitious
 * N – Nurturing
 * I – Inspiring
 * T – Tenacious
 * A – Ambitious
 */
