const urlRegex = /(https?:\/\/[^\s]+)/g;
export const linkify = (text: any) => (text.match(urlRegex) || []);
