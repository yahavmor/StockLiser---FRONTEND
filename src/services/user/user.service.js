
export const UserService = {
    setInitialPrefs
}


function setInitialPrefs(prefs){
    if (!prefs) return
    document.documentElement.style.setProperty('--bg-color', prefs.bgcColor || '')
    document.documentElement.style.setProperty('--main-color', prefs.color || '')
}
