const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
}

// Função para buscar um corte por id
function buscaCortePorId(id) {
    const cortes = barbearia.cortes
    for (const corte of cortes) {
        if (corte.id === id) {
        return corte
        }
    }
    return 'Corte não encontrado'
}

// Função para buscar uma barba por id
function buscaBarbaPorId(id) {
    const barbas = barbearia.barbas
    for (const barba of barbas) {
        if (barba.id === id) {
            return barba
        }
    }
    return 'Barba não encontrada'
}

// Função para verificar se a barbearia está aberta ou fechada
function verificaStatusBarbearia() {
    if (barbearia.estaAberto) {
        return 'Estamos abertos'
    } else {
        return 'Estamos fechados'
    }
}

// Função para retornar todos os cortes oferecidos pela barbearia
function retornaTodosCortes() {
    return barbearia.cortes
}

// Função para retornar todas as barbas oferecidas pela barbearia
function retornaTodasBarbas() {
    return barbearia.barbas
}

// Função para criar um pedido
function criaPedido(nomeCliente, idCorte, idBarba) {
    const corte = buscaCortePorId(idCorte)
    const barba = buscaBarbaPorId(idBarba)

    const pedido = {
        nome: nomeCliente,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.valor,
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.valor,
    }

    return pedido
}

// Função para atualizar um serviço (corte ou barba)
function atualizarServico(lista, idItem, novoValor, novoTipo) {
    for (const item of lista) {
        if (item.id === idItem) {
            item.tipo = novoTipo
            item.valor = novoValor
            return lista
        }
    }
    return lista // Retorna a lista original se o id não for encontrado
}

// Função para calcular o valor total do pedido
function calculaTotal(pedido) {
    return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco
}
