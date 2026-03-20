export function createRandomId() {
    return Math.random().toString(36).substring(2, 10)
}
export function isProbablySymbol(str) {
  return /^[A-Z]{1,5}$/.test(str);
}
export function displayMessage(msg){
    console.log(msg)
}