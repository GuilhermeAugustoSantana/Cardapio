import { produtos } from "../api/data_produtos"

export const filtraProdutosPorCategoria = (categoria) => {
  return produtos.filter((produto) => produto.categoria === categoria);
}

export const filtraProdutosPorTexto = (textoDigitado) => {
  return produtos.filter((produto) =>
    produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase()) ||
    produto.nome.toLowerCase().includes(textoDigitado.toLowerCase())
);
}

export const produtosEntradas = filtraProdutosPorCategoria("Entradas");