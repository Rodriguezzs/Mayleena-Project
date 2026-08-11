# Mayleena

> Uma ponte entre comunidades.

Mayleena é um bot desenvolvido em **C**, atualmente focado em realizar a comunicação entre **Stoat e Discord** através de uma bridge de mensagens.

O projeto está em desenvolvimento e esta é apenas a primeira etapa da Mayleena. No futuro, novas funções poderão ser adicionadas ao bot.

---

## Status atual

- **Linguagem:** C
- **Função principal:** Bridge Stoat ↔ Discord
- **Website:** HTML, CSS e JavaScript
- **Hospedagem do website:** GitHub Pages

---

## Como funciona

A Mayleena atua como uma ponte entre os dois serviços.

```text
        STOAT
          │
          │ mensagem
          ▼
      MAYLEENA
          │
          │ retransmissão
          ▼
       DISCORD
```

O processo também funciona no sentido contrário:

```text
       DISCORD
          │
          │ mensagem
          ▼
      MAYLEENA
          │
          │ retransmissão
          ▼
        STOAT
```

Quando uma mensagem é enviada em um dos lados, a Mayleena recebe o evento, identifica sua origem e retransmite o conteúdo para o canal correspondente no outro serviço.

De forma simplificada:

```text
Mensagem
   ↓
Mayleena recebe
   ↓
Identifica a origem
   ↓
Processa a mensagem
   ↓
Envia para o outro serviço
```

A Mayleena também precisa reconhecer mensagens que já foram retransmitidas para evitar que elas fiquem circulando entre Stoat e Discord indefinidamente.

---

## Objetivo

A bridge é o ponto de partida do projeto.

A ideia é que a Mayleena cresça gradualmente a partir dessa base, mantendo sua função principal enquanto novas possibilidades forem desenvolvidas.

**Ela começou como uma ponte.**
