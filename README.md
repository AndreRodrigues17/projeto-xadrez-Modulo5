# projeto-xadrez-Modulo5

## API

### Item de exemplo
json

{ "id": 1, "name": "Cavalo", "value": 3, "color": "Branca" }

`id`: número, criado pelo server (maior id existente + 1)
`name`: texto, obrigatório
`value`: número, 0 ou mais (o Rei tem 0)
`color`: "Branca" ou "Preta", obrigatório

### POST /api/pecas

- Recebe: `{ "name": "...", "value": 0, "color": "Branca" }` (sem id)
- Se faltar o nome ou a cor, ou o valor for menor que 0: 400 com `{ "error": "mensagem" }` e não guarda
- Se estiver bem: 201 com o item criado, já com id

### DELETE /api/pecas/:id

- Recebe: o id no endereço
- Se existe: 204, sem corpo
- Se não existe: 404 com `{ "error": "mensagem" }`