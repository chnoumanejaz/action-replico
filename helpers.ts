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

export default function formatISODate(isoString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    // hour: "2-digit",
    // minute: "2-digit",
  };

  const formattedDate = new Intl.DateTimeFormat('en-UK', options).format(
    new Date(isoString)
  );
  return formattedDate;
}

export function formatISOTime(isoString: string): string {
  const utcDate = new Date(isoString);
  const time = utcDate.toLocaleTimeString('en-US');
  return time;
}
