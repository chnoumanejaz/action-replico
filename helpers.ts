export function extractUniqueValues(arr: any[], extractFor: string): any[] {
  const uniqueValues: Set<any> = new Set();

  arr.forEach(obj => {
    if (obj.hasOwnProperty(extractFor)) {
      uniqueValues.add(obj[extractFor]);
    }
  });

  return Array.from(uniqueValues);
}

export function extractNameInitials(name: string) {
  const words = name.split(' ');
  const initials = words.map(word => word.charAt(0).toUpperCase());
  return initials.join('');
}
