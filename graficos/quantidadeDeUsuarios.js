import { getCSS, tickfont} from "./comum.js";
async function quantidadeDeUsuarios(){
    const url = `https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json`
    const res = await fetch(url)
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados);
    const quantidadeDeUsuarios = Object.values(dados);

    const infos = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: `bar`, 
            marker:{
                color: getCSS('--cor-primaria')
            }
        }
    ]
    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Redes sociais com mais usúarios no mundo',
            x:0,
            font:{
                color: getCSS('--cor-primaria'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis:{
            tickfont: tickfont,
            title: {
                text: 'Nome das redes socias',
                font:{
                    color: getCSS('--cor-secundária')
                }
            }

        },
        yaxis: {
            tickfont: tickfont,
            title: {
                text: 'Milhões de usários ativos',
                font: {
                    color: getCSS('--cor-secundária')
                }
            }

        }
    }

    const graficos = document.createElement('div');
    graficos.className  = 'graficos';
    document.getElementById('graficos-container').appendChild(graficos);
    Plotly.newPlot(graficos,infos,layout);
}

quantidadeDeUsuarios();
