# bootcamp-gostack-desafio-06

Nesse desafio foram adicionadas algumas funcionalidades, tais como descritas abaixo:

### 1. Loading de repositórios

Usamos o  <ActivityIndicator /> para o efeito de carregamento da nossa lista de repositórios. O <ActivityIndicator /> e uma biblioteca do react -native.

### 2. Scroll infinito

Foi adicionado a opção de scroll infinito usando o :

```jsx
<Stars
  onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
  onEndReached={this.loadMore} // Função que carrega mais itens
>
```

Também foi adicionado a opção de paginação.

```
https://api.github.com/users/diego3g/starred?page=2

```

### 

### 3. Pull to Refresh

Atualização de lista quando o usuário arrastar para baixo.

```jsx
<Stars
  onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
  refreshing={this.state.refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
  // Restante das props
>
```

### 4. WebView

Foi adicionado uma webView para que quando o usuário pressione o reposirório possa visualizar.

### Resultado

<img src="https://user-images.githubusercontent.com/32397288/82909062-2aeaac00-9f3f-11ea-80de-07a651e49ed6.jpeg" width="200"> | <img src="https://user-images.githubusercontent.com/32397288/82909243-62595880-9f3f-11ea-934c-daaf24a0676d.jpeg" width="200"> | <img src="https://user-images.githubusercontent.com/32397288/82909249-62f1ef00-9f3f-11ea-84cc-ae0205656128.jpeg" width="200"> | 
<img src="https://user-images.githubusercontent.com/32397288/83290146-8d041500-a1bc-11ea-9703-bba25ceb2d98.jpeg" width="200">
