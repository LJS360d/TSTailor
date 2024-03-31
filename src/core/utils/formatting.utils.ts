export function toCapitalized(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function wordBreak(s: string) {
  if (s.length <= 60) return s;

  let result = '';
  let line = '';

  s.split(' ').forEach((word) => {
    if ((line + word).length > 60) {
      result += `${line.trim()}\n`;
      line = '';
    }
    line += `${word} `;
  });

  return result + line.trim();
}
