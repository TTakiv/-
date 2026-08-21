const KATAKANA_START = 0x30a1;
const KATAKANA_END = 0x30f6;
const HIRAGANA_START = 0x3041;

function katakanaToHiragana(str: string): string {
  let out = '';
  for (const ch of str) {
    const code = ch.codePointAt(0)!;
    if (code >= KATAKANA_START && code <= KATAKANA_END) {
      out += String.fromCodePoint(code - KATAKANA_START + HIRAGANA_START);
    } else {
      out += ch;
    }
  }
  return out;
}

/**
 * Normalize a card name so OCR noise / spacing / full-width vs half-width
 * differences don't prevent matching against the stored card database.
 * Agricola card names never contain digits (only the cost/value icons
 * printed next to the name do), so any digit is OCR noise from the cost
 * number bleeding into the crop and is stripped along with punctuation.
 */
/** Strip digits from OCR text for display, e.g. when a card's cost number bleeds into the name line. */
export function stripDigits(raw: string): string {
  return raw.normalize('NFKC').replace(/[0-9]/g, '').trim();
}

export function normalizeCardName(raw: string): string {
  return katakanaToHiragana(
    raw
      .normalize('NFKC')
      .toLowerCase()
      .replace(/[\s　]+/g, '')
      .replace(/[0-9「」『』【】()（）・.,、。'"’”:：!!?？\-–—]/g, ''),
  );
}
