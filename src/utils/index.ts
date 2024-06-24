
export const isValidEmail = (email: string) => {
  if (!email) return false
  return /\S+@\S+\.\S+/.test(email);
}

export const isValidNumber = (number: string) => {
  // numbger is not requires - empty input is ok
  if (!number) return true
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(number);
}

export const makeSelectedString = (text: string, string: string) => {
  return text.replace(string, `<span>${string}</span>`);
}

export const maxLengthValidation = (str: string, max: number) => {
  return str.length > max;
}
