const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyPriority(variavel)
}

const tickfont = {
    color: getCSS('--cor-primaria'),
    size: 16,
    family: getCSS('--font')

}

export{
    getCSS, tickfont
}