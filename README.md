# -bootcamp-gostack-desafio-06

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
