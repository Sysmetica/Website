
export const isValidEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
}

export const isValidNumber = (email: string) => {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(email);
}

export const makeSelectedString = (text: string, string: string) => {
  return text.replace(string, `<span>${string}</span>`);
}
