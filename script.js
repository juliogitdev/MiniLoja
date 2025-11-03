let base_dados_produtos = [
    {
        id: 1,
        nome: "Tênis Nike Revolution 6 Masculino",
        preco: 299.99,
        categoria: "Corrida",
        imagem: "https://static.netshoes.com.br/produtos/tenis-nike-revolution-8-masculino/26/SGL-0036-026/SGL-0036-026_zoom1.jpg?ts=1761938797&ims=1088x"
    },
    {
        id: 2,
        nome: "Chinelo Havaianas Top Preto",
        preco: 39.99,
        categoria: "Chinelo",
        imagem: "https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/reidosch/catalog/api/app-9741/655667a6a81b9.jpg"
    },
    {
        id: 3,
        nome: "Chuteira Nike Phantom GX Club Campo",
        preco: 349.90,
        categoria: "Chuteira",
        imagem: "https://imgnike-a.akamaihd.net/768x768/02478115A9.jpg"
    },
    {
        id: 4,
        nome: "Sapatênis Democrata Air Stretch Marrom",
        preco: 279.99,
        categoria: "Sapatenis",
        imagem: "https://democrata.vtexassets.com/arquivos/ids/230363-1600-1600?v=638972563227200000&width=1600&height=1600&aspect=true"
    },
    {
        id: 5,
        nome: "Bota Caterpillar Colorado Honey",
        preco: 499.99,
        categoria: "Botas",
        imagem: "https://grupooscar.vteximg.com.br/arquivos/ids/1942366-1200-1200/00117394754394355.jpg?v=638841401156700000"
    },
    {
        id: 6,
        nome: "Tênis Adidas Runfalcon 3.0 Masculino",
        preco: 259.99,
        categoria: "Corrida",
        imagem: "https://imgcentauro-a.akamaihd.net/1024x1024/9834964WA9.jpg"
    },
    {
        id: 7,
        nome: "Sandália Kenner Rakka Dedo Masculina",
        preco: 179.90,
        categoria: "Sandália",
        imagem: "https://imgs.search.brave.com/PGmrCPO8IVjUBwMYRovMi1C9Ef8athLnYC7eM4Hdt5g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90LXN0/YXRpYy5kYWZpdGku/Y29tLmJyL1IwZ3Ba/RWM1SGxBVXZBZGZT/M0REY01aUUZrMD0v/Zml0LWluLzQzMHg2/MjMvc3RhdGljLmRh/Zml0aS5jb20uYnIv/cC9rZW5uZXItc2Fu/ZCVDMyVBMWxpYS1r/ZW5uZXItbWFzY3Vs/aW5hLXJha2thLTI2/MjItOTY5NjYzMjEt/MS16b29tLmpwZw"
    },
    {
        id: 8,
        nome: "Tênis Puma Flyer Runner Masculino",
        preco: 219.99,
        categoria: "Corrida",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner-mesh-bdp-masculino/06/2I3-9913-006/2I3-9913-006_zoom1.jpg?ts=1760758562&ims=1088x"
    },
    {
        id: 9,
        nome: "Chuteira Futsal Umbro Class II",
        preco: 189.99,
        categoria: "Chuteira",
        imagem: "https://imgcentauro-a.akamaihd.net/1024x1024/97016731A9.jpg"
    },
    {
        id: 10,
        nome: "Bota Adventure Masculina Couro",
        preco: 239.90,
        categoria: "Botas",
        imagem: "https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/atriacal/catalog/conquest/00-1000x1000-1.jpg"
    },
    {
        id: 11,
        nome: "Tênis Vans Old Skool Preto",
        preco: 349.90,
        categoria: "Casual",
        imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h74/h3f/h00/h00/12856054939678/Midres-Vans-V1002001070008-01.jpg?w=1920&q=100"
    },
    {
        id: 12,
        nome: "Tênis Converse All Star Chuck Taylor Branco",
        preco: 229.99,
        categoria: "Casual",
        imagem: "https://converse.com.br/media/catalog/product/c/t/ct00010001_a_08x1_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width="
    },
    {
        id: 13,
        nome: "Tênis Asics Gel-Nagoya 5",
        preco: 439.99,
        categoria: "Corrida",
        imagem: "https://trilhaesportes.fbitsstatic.net/img/p/tenis-asics-gel-nagoya-5-masculino-preto-branco-71461/269671-1.jpg?w=1200&h=1200&v=no-value"
    },
    {
        id: 14,
        nome: "Chinelo Cartago Mali XII",
        preco: 59.99,
        categoria: "Chinelo",
        imagem: "https://static.netshoes.com.br/produtos/chinelo-cartago-mali-xii-masculino/01/G70-0478-401/G70-0478-401_zoom1.jpg?ts=1694796288&ims=544x"
    },
    {
        id: 15,
        nome: "Sapatênis West Coast Casual Couro",
        preco: 189.99,
        categoria: "Sapatenis",
        imagem: "https://imgs.search.brave.com/EdGdUNrNe_V7yUqECaELFwkOJBOCLrRfIRNOWcvaxvo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzg3NDgyMC1NTEI3/MzMwNjgyNjEzMF8x/MjIwMjMtRS10bmlz/LXNhcGF0bmlzLW1h/c2N1bGluby13ZXN0/LWNvYXN0LWNhc3Vh/bC1jb3Vyby11cmJh/bm8ud2VicA"
    },
    {
        id: 16,
        nome: "Tênis Under Armour Charged Pursuit 3",
        preco: 379.99,
        categoria: "Corrida",
        imagem: "https://imgs.search.brave.com/nZ_wIH4tPdTth499EsjedhO1ZzQrxVIxQuJr_bcaRwk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/ZGVwb3J2aWxsYWdl/LmNvbS9jZG4tY2dp/L2ltYWdlL2g9Nzg1/LHc9NjI4LGRwcj0x/LGY9YXV0byxxPTc1/LGZpdD1jb250YWlu/LGJhY2tncm91bmQ9/d2hpdGUvcHJvZHVj/dC12ZXJ0aWNhbC91/YS0zMDI2NTE4LTAw/MV8wMDMuanBn"
    },
    {
        id: 17,
        nome: "Sandália Rider Street Bold",
        preco: 89.99,
        categoria: "Sandália",
        imagem: "https://imgs.search.brave.com/Ts4ZREVD2MwTLBrT04Gkh2uh3dyitX0X7er3zUc3xS8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hLXN0/YXRpYy5tbGNkbi5j/b20uYnIvODAweDU2/MC9zYW5kYWxpYS1y/aWRlci1zdHJlZXQt/Ym9sZC1hZC1icmFu/Y28tcHJldG8vMTBr/c3BvcnRzLzExNTc1/MjUzMzItNDEvODE2/MTMzM2ExZTI5ZGY5/Yzk5ZDE4MzdjZmRh/MzM2MzUuanBlZw"
    },
    {
        id: 18,
        nome: "Bota Chelsea Masculina Couro Café",
        preco: 319.99,
        categoria: "Botas",
        imagem: "https://imgs.search.brave.com/chip6MxjafKFypR5yIQr5zuoaWSLBhpgCxETKQv2bXM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuemF0dGluaS5j/b20uYnIvcHJvZHV0/b3MvYm90YS1ib3Rp/bmEtY2hlbHNlYS1t/YXNjdWxpbmEtZGUt/Y291cm8tY2Fuby1j/dXJ0by1jYWZlLTEw/NC8zOC9PRzYtMDAw/My0xMzgvT0c2LTAw/MDMtMTM4X3pvb20x/LmpwZz90cz0xNjgw/MTYyNDE1Jmltcz0z/MjZ4"
    },
    {
        id: 19,
        nome: "Tênis Lacoste Powercourt Masculino",
        preco: 579.99,
        categoria: "Casual",
        imagem: "https://imgs.search.brave.com/ZEgT482Jb8TQ317Sn1iGAK-y-CS2YQvYVBRgB6GTlgE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90LXN0/YXRpYy5kYWZpdGku/Y29tLmJyL1hQTWZ2/OXFaU2h3OVJQNjU3/c2hmT2FVcldMST0v/Zml0LWluLzQzMHg2/MjMvc3RhdGljLmRh/Zml0aS5jb20uYnIv/cC9sYWNvc3RlLXQl/QzMlQUFuaXMtZGUt/Y291cm8tbWFzY3Vs/aW5vLWxhY29zdGUt/cG93ZXJjb3VydC1i/cmFuY28tNDA2OC0z/OTUxMDQ0MS0xLXpv/b20uanBn"
    },
    {
        id: 20,
        nome: "Chinelo Nike Victori One Slide",
        preco: 169.99,
        categoria: "Chinelo",
        imagem: "https://imgs.search.brave.com/kb_datTbt9-pPYm2nN6ZjfeUPxnCl6pKC4Nz5vHWa3A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzEyNjcxOTAv/Y2hpbmVsb19uaWtl/X3ZpY3Rvcmlfb25l/X3NsaWRlX3ByZXRv/XzExODNfdmFyaWFj/YW9fNTA4M180XzMy/ZWI0YjUxNmM1YWZj/Y2Q1OTgxNjMwY2Ux/YmQyZTEwLmpwZw"
    }
];



document.addEventListener("DOMContentLoaded", carregar_pagina_inicial)


function listar_produtos() {
    let div_todos_produtos = document.getElementById("todos-produtos");
    let produtos_montados = "";
    base_dados_produtos.forEach(item => {
        produtos_montados +=
            `<article class="card-produto">
                    <img src="${item.imagem}">
                    <h3>${item.nome}</h3>
                    <p class="preco">R$ ${item.preco},00</p>
                    
                    <button class="botao-comprar" data-nome="${item.nome}" data-preco="${item.preco}">
                        Comprar
                    </button>
                </article>`;
    })

    if(div_todos_produtos){
        div_todos_produtos.innerHTML += produtos_montados
    }

}

function carregar_pagina_inicial(){
    let produto_categoria = {}

    base_dados_produtos.forEach(item => {
        if(!produto_categoria[item.categoria]){
            produto_categoria[item.categoria] = []
        }

        produto_categoria[item.categoria].push(item)
        
    })

    let produtos_montado = ``

    for(const categoria in produto_categoria){
        let produtos = ``

        produto_categoria[categoria].forEach((item) => {
            produtos += `<article class="card-produto">
                    <img src="${item.imagem}">
                    <h3>${item.nome}</h3>
                    <p class="preco">R$ ${item.preco},00</p>
                    
                    <button class="botao-comprar" data-nome="${item.nome}" data-preco="${item.preco}">
                        Comprar
                    </button>
                </article>`
        })


        let section_model = `
        <section>
            <h2>${categoria}</h2>
            <div class="produtos">
                ${produtos}
            </div>
        </section>`
        produtos_montado += section_model
    }

    let main = document.getElementById("main");
    if(main){
        main.innerHTML += produtos_montado
    }

    listar_produtos();
   
    
}

