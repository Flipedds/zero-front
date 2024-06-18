export const items = [
    {id: 1, name: 'Item A', lot: 'Lote 1', expiryDate: '2024-07-01', quantity: 4},
    {id: 2, name: 'Item B', lot: 'Lote 1', expiryDate: '2023-05-04', quantity: 25},
    {id: 3, name: 'Item C', lot: 'Lote 10', expiryDate: '2023-03-01', quantity: 10},
    {id: 4, name: 'Item D', lot: 'Lote 20', expiryDate: '2023-07-15', quantity: 5},
    {id: 5, name: 'Item E', lot: 'Lote 25', expiryDate: '2024-12-03', quantity: 20},
    {id: 6, name: 'Item F', lot: 'Lote 30', expiryDate: '2024-06-10', quantity: 8},
    {id: 7, name: 'Item G', lot: 'Lote 35', expiryDate: '2024-06-19', quantity: 12},
    {id: 8, name: 'Item H', lot: 'Lote 40', expiryDate: '2024-06-20', quantity: 10},
];

export const desperdicios = items
    .filter(desperdicio => new Date(desperdicio.expiryDate) < Date.now())

export const dadosGraficoDesperdicioPorMes = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
        'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
        'Novembro', 'Dezembro'],
    values: [
        desperdicios.filter(value => value.expiryDate.match("\\d{4}-01-\\d{2}"))
            .reduce((acc, current) => acc + current.quantity, 0),
        desperdicios.filter(value => value.expiryDate.match("\\d{4}-02-\\d{2}"))
            .reduce((acc, current) => acc + current.quantity, 0),
        desperdicios.filter(value => value.expiryDate.match("\\d{4}-03-\\d{2}"))
            .reduce((acc, current) => acc + current.quantity, 0),
        desperdicios.filter(value => value.expiryDate.match("\\d{4}-04-\\d{2}"))
            .reduce((acc, current) => acc + current.quantity, 0),
        desperdicios.filter(value => value.expiryDate.match("\\d{4}-05-\\d{2}"))
            .reduce((acc, current) => acc + current.quantity, 0),
        desperdicios.filter(value => value.expiryDate.match("\\d{4}-06-\\d{2}"))
            .reduce((acc, current) => acc + current.quantity, 0),
        desperdicios.filter(value => value.expiryDate.match("\\d{4}-07-\\d{2}"))
            .reduce((acc, current) => acc + current.quantity, 0),
        desperdicios.filter(value => value.expiryDate.match("\\d{4}-08-\\d{2}"))
            .reduce((acc, current) => acc + current.quantity, 0),
        desperdicios.filter(value => value.expiryDate.match("\\d{4}-09-\\d{2}"))
            .reduce((acc, current) => acc + current.quantity, 0),
        desperdicios.filter(value => value.expiryDate.match("\\d{4}-10-\\d{2}"))
            .reduce((acc, current) => acc + current.quantity, 0),
        desperdicios.filter(value => value.expiryDate.match("\\d{4}-11-\\d{2}"))
            .reduce((acc, current) => acc + current.quantity, 0),
        desperdicios.filter(value => value.expiryDate.match("\\d{4}-12-\\d{2}"))
            .reduce((acc, current) => acc + current.quantity, 0)
    ]
};

export const dadosGraficoQuantidadeDesperdicioPorLote = {
    labels: desperdicios.map(value => value.lot),
    values: desperdicios.map(value => value.quantity)
};

export const dadosGraficoTotalDisperdicioVsTotalItens ={
    labels: ["Total vs Disperdícios em Quantidade"],
    values: [
        items.reduce((acc, current) => acc + current.quantity, 0),
        desperdicios.reduce((acc, current) => acc + current.quantity, 0)
    ]
};


