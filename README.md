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

## Como correr a app

```
git clone https://github.com/AndreRodrigues17/projeto-xadrez-Modulo5.git
cd projeto-xadrez-Modulo5
npm install
cd client
npm install
```

São precisos dois terminais abertos ao mesmo tempo.

Terminal 1, na pasta `projeto-xadrez-Modulo5`:

```
node server.js
```

Terminal 2, na pasta `projeto-xadrez-Modulo5/client`:

```
npm run dev
```

Abrir `http://localhost:5173` no browser. O server fica em `http://localhost:3001`.