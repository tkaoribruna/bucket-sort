# Bucket Sort — Algoritmos de Ordenação

 Repositório com a implementação do algoritmo de ordenação **Bucket Sort** em **C**, desenvolvido para a **Atividade Avaliativa 1** da disciplina de **Estratégias de Programação**.

---

## Sobre o Projeto

Este programa foi desenvolvido para a atividade de algoritmos de ordenação da disciplina de Estratégias de Programação. A ideia é mostrar, de forma simples, como funciona o Bucket Sort e como os valores podem ser separados antes de serem ordenados.


Link para slides: https://tree-frog-0wqg6x.my.canva.site
---

### Integrantes

| Nome                              | Foto                                                                 | GitHub                                      |
|-----------------------------------|----------------------------------------------------------------------|---------------------------------------------|
| Bruna Kaori Takuti                | <img src="https://github.com/tkaoribruna.png" width="100"/>          | https://github.com/tkaoribruna              |
| Daniel Durante Francisco Dias     | <img src="https://github.com/Dandurant.png" width="100"/>            | https://github.com/Dandurant                |
| Igor Rocha Cantieri               | <img src="https://github.com/IgorRochaCantieri.png" width="100"/>    | https://github.com/IgorRochaCantieri        |
| Lucas Gabriel Pinheiro dos Santos | <img src="https://github.com/lucasppinheiro.png" width="100"/>       | https://github.com/lucasppinheiro           |
| Rafael Moreira Rosa               | <img src="https://github.com/FaelMoreiraRosa.png" width="100"/>      | https://github.com/FaelMoreiraRosa          |

---

## Como o programa funciona

O vetor usado no exemplo começa assim:

```text
7 2 9 4 1 6 3 8
```

Primeiro, os números são separados em três grupos:

- `bucket0`: números menores ou iguais a 3;
- `bucket1`: números entre 4 e 6;
- `bucket2`: números maiores que 6.

Depois de separar os valores, cada bucket é ordenado usando Insertion Sort. No final, os três grupos são colocados de volta no vetor `numeros`, já na ordem correta.

O resultado fica assim:

```text
1 2 3 4 6 7 8 9
```

## Por que o código foi feito dessa forma?

Nós optamos por fazer o código da maneira mais simples possível para facilitar a explicação dos conceitos apresentados no trabalho. Por isso, os valores do vetor estão escritos diretamente no programa, os intervalos dos buckets são visíveis e cada etapa pode ser acompanhada com facilidade.

Essa escolha deixa o exemplo mais didático, mas também faz com que ele não seja uma implementação completa para qualquer tipo de entrada. O objetivo principal aqui é entender o funcionamento do algoritmo, e não criar uma ferramenta pronta para receber vetores de qualquer tamanho.

## Uma situação que pode causar comportamento inesperado

Os três buckets foram declarados com espaço para apenas 8 valores:

```c
int bucket0[8], bucket1[8], bucket2[8];
```

O programa funciona com o vetor atual porque ele possui 8 elementos e a quantidade de valores colocada em cada bucket não ultrapassa esse limite. Porém, se alguém aumentar o vetor sem aumentar os buckets, um deles pode receber mais de 8 valores.

Nesse caso, o programa tentará escrever em uma posição que não pertence ao array. Em C, isso é chamado de acesso fora dos limites do vetor e causa **comportamento indefinido**. O resultado pode parecer correto, apresentar números errados, alterar outras variáveis ou até fazer o programa travar. Não dá para prever qual dessas situações vai acontecer.

Essa limitação foi mantida porque escolhemos uma implementação menor e mais fácil de acompanhar durante a apresentação. Em uma versão mais completa, seria necessário validar a quantidade de elementos ou usar uma estrutura que aumentasse de tamanho conforme a necessidade.

## Como executar

Com o GCC instalado, compile o programa:

```bash
gcc main.c -o bucket_sort
```

No Windows, execute:

```bash
bucket_sort.exe
```

Este exemplo foi feito para trabalhar com o vetor que está no arquivo `main.c`. Caso o vetor seja alterado, os limites dos buckets também precisam ser considerados.

## Estrutura do Repositório
```text
.
├── main.c              # Código-fonte principal com a implementação do Bucket Sort em C
├── Bucket-Sort.pdf     # Slides/Material utilizado durante o seminário
└── README.md           # Documentação do repositório
