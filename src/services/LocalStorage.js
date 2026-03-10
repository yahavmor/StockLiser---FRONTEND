
export function loadFromStorage(key){
    const data = localStorage.getItem(key)
    if(data) return JSON.parse(data)
    else return null
}
export function saveToStorage(key,value){
    return localStorage.setItem(key,JSON.stringify(value))
} 
export function removeFromStorage(key){
    return localStorage.removeItem(key)
}