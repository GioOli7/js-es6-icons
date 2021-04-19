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

/*
{
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
*/
// refs
const container = document.querySelector('.icons')

// stampo cards in hmtl
printCards(icons);






/******************************************************
 * FUNCTIONS
****************************************************** */

/**
 * PRINT CARDS IN HTML
 */
function printCards(icons) {
    icons.forEach((element) => {
        const {prefix, family, name} = element;
        let html = 
        `<div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: #333"></i>
            <div class="title">${name}</div>
        </div>`
        container.innerHTML += html;
    })
}
