/*
Milestone 1
Partendo dalla seguente struttura dati (allegata sotto) , mostriamo in pagina tutte le icone disponibili

Milestone 2
Coloriamo le icone per tipo

Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

// Array di oggetti
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];


// refs
const container = document.querySelector('.icons')
const colors = ['#d9376e', '#50a626', '#376bd9']
const select = document.querySelector('#type');

// stampo cards in hmtl
// printCards(icons);

// ottengo i possibili type
const types = getTypes(icons);
// console.log(types);

// creo un nuovo array di oggetti con la proprietà color, associando colore a types
const coloredIcons = colorIcons(colors, types, icons);
// console.log(coloredIcons);

// stampo le card con le icone colorate
printCards(coloredIcons);

// popolo il select con i vari types
getOptions(types);

// stampo le icone secondo il type selezionato
printSelectCards (select, coloredIcons);







/******************************************************
 * FUNCTIONS
****************************************************** */





/**
 * PRINT CARDS IN HTML
 */
function printCards(icons) {
    container.innerHTML = '';
    icons.forEach((element) => {
        const {prefix, family, name, color} = element;
        html = 
        `<div class="icon p-20">
        <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        <div class="title">${name}</div>
        </div>`
        container.innerHTML += html;
    })
}

/**
 * GET TYPES OF ARRAY ICONS
 */
function getTypes(icons) {
    let types = [];
    icons.forEach((element) => {
        if (! types.includes(element.type)) {
            types.push(element.type);
        }
    })
    return types;
}


/**
 * 
 */
function colorIcons(colors, types, icons) {
    const coloredIcons = icons.map((element) => {
        const index = types.indexOf(element.type)
        return {
            ...element,
            color: `${colors[index]}`,
        }
    })
    return coloredIcons;
}


/**
 * GET SELECT OPTIONS
 */
function getOptions(types) {
    let html = '';
    types.forEach((element) => {
        html += `<option value="${element}">${element}</option>`
        // console.log(html);
    })
    select.innerHTML += html;
}

/**
 * FILTERED ICONS BY TYPE
 */

function getSelectedIcons(selected, icons) {
    
    if (selected === 'all') {
        return icons;
    }
    
    const selectedIcons = icons.filter(element => {
        return element.type === selected;
    })
    return selectedIcons;
}

/**
 * PRINT CARDS FILTERED BY SELECT OPTIONS
 */

function printSelectCards (select, coloredIcons){
    select.addEventListener('change', () => {
        // console.log(select.value);
        const selected = select.value;
        const selectedIcons = getSelectedIcons(selected, coloredIcons)
        printCards(selectedIcons);
    })
}
