/**
 * gerarMenu.
 * @param   texto  Texto inicial do menu.
 * @param   array  Array com as opcoes do menu.
 * @returns Json do menu.
 */

export default function(texto, array) {
    var menu = {
        text: texto,
        options: []
    }
    for(var i = 0; i < array.length; i++) {
        if(i==0){
            menu.options[i] = {
                text: array[i]
            }
        }else{
            menu.options[i] = {
                text: array[i],
                order: i+1
            }
        }
    }
    return menu
}
