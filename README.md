# projeto-xadrez-Modulo5

## API

### Item de exemplo
json

{ "id": 1, "name": "Cavalo", "value": 3, "color": "Branca" }

`id`: número, criado pelo server (maior id existente + 1)
`name`: texto, obrigatório
`value`: número, 0 ou mais (o Rei tem 0)
`color`: "Branca" ou "Preta", obrigatório

### GET /api/pecas
Recebe: nada
Responde: 200 com a lista de itens (array)