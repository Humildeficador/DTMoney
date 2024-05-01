# TypeScript: Explorando Pick e Omit

No mundo do desenvolvimento em TypeScript, a capacidade de manipular tipos de forma precisa é crucial. Duas ferramentas valiosas para isso são Pick e Omit, que nos permitem selecionar ou descartar campos de uma interface de maneira eficiente.

Considere a seguinte interface `Transaction`:

```tsx
interface Transaction {
    id: number;
    title: string;
    type: string;
    category: string;
    value: number;
    createdAt: string;
}
```

## Pick: Selecionando Tipos

A função `Pick` nos permite criar um novo tipo que contém apenas os campos especificados. Por exemplo:

```tsx
type TransactionInput = Pick<Transaction, 'id' | 'createdAt'>;
```

Aqui, `TransactionInput` será um tipo que contém apenas os campos `id` e `createdAt`, como segue:

```tsx
type TransactionInput = {
    id: number;
    createdAt: string;
}
```

## Omit: Descartando Tipos

Por outro lado, `Omit` nos permite criar um novo tipo que exclui os campos especificados. Por exemplo:

```tsx
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
```

Nesse caso, `TransactionInput` conterá todos os campos de `Transaction`, exceto `id` e `createdAt`:

```tsx
type TransactionInput = {
    title: string;
    type: string;
    category: string;
    value: number;
}
```

Essas ferramentas oferecem uma maneira poderosa de trabalhar com tipos em TypeScript, facilitando a manipulação de estruturas de dados complexas de forma clara e concisa.