import {getCSS, tickfont} from  "./comum.js"
async  function redesFavoritas(){
    const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas'
    const res = await res.json();
    const dados =  await res.json();
    const redes = Object.keys(dados);
    const valores = Object.values(dados);

    const infos =[
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo:'label+pervent'
        }
    ];
}

redesFavoritas