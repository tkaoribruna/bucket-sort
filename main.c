/*
sizeof() é um operador que informa quantos bytes uma variável ocupa na memória

No primeiro "for(){}", sizeof(numeros)/sizeof(numero[0]) informa quantos números 
existem dentro do Array numeros

*/

#include<stdio.h>

int main(){
    int numeros[] = {7, 2, 9, 4, 1, 6, 3, 8};
    int bucket0[8], bucket1[8], bucket2[8];
    int contador0 = 0, contador1 = 0, contador2 = 0;
    int indice = 0; //Esta variável "indice" indica a posição no Array numeros que esta vazia
    
    
    
    printf("Vetor numeros[] antes do Bucket Sort: ");
    
    for(int i=0; i < sizeof(numeros)/sizeof(numeros[0]); i++){
        printf("[%d] ", numeros[i]);
        
        /*Realizamos a verificação de cada número e colocamos eles em seus respectivos Buckets*/
        /*Os contadores apontam para a próxima posição vazia do bucket*/
        if(numeros[i] <= 3){
            bucket0[contador0] = numeros[i];
            contador0++;
        }else if(numeros[i] <= 6){
            bucket1[contador1] = numeros[i];
            contador1++;
        }else{
            bucket2[contador2] = numeros[i];
            contador2++;
        }
    }
    
    /*Aqui com os buckets separados, ordenamos seus valores internos*/
    for(int i=1; i<contador0; i++){
        int numDireita = bucket0[i];
        int j = i-1;
        
        while(j >= 0 && numDireita < bucket0[j]){
            bucket0[j + 1] = bucket0[j];
            j--;
        }
        
        bucket0[j+1] = numDireita;

    }
    
    /*Aqui com os buckets separados, ordenamos seus valores internos*/
    for(int i=1; i<contador1; i++){
        int numDireita = bucket1[i];
        int j = i-1;
        
        while(j >= 0 && numDireita < bucket1[j]){
            bucket1[j+1] = bucket1[j];
            j--;
        }
        
        bucket1[j+1] = numDireita;     
    }
    
    /*Aqui com os buckets separados, ordenamos seus valores internos*/
    for(int i=1; i<contador2; i++){
        int numDireita = bucket2[i];
        int j = i-1;
        
        while(j >= 0 && numDireita < bucket2[j]){
            bucket2[j+1] = bucket2[j];
            j--;
        }
        bucket2[j+1] = numDireita;
    }
    
    //Apartir desta linha iremos agrupar os buckets no Array numeros[]
    //Eles ja estão ordenados
    
    for(int i=0; i<contador0; i++){
        numeros[indice] = bucket0[i];
        indice++;
    }
    
    for(int i=0; i<contador1; i++){
        numeros[indice] = bucket1[i];
        indice++;
    }
    
    for(int i=0; i<contador2; i++){
        numeros[indice] = bucket2[i];
        indice++;
    }
    
    printf("\n");
    printf("Vetor numeros[] depois do Bucket Sort: ");
    
    //Vamos imprimir todo o vetor numeros[] depois do bucket sort
    for(int i=0; i < sizeof(numeros)/sizeof(numeros[0]); i++){
        printf("[%d] ", numeros[i]);
    }
    
    printf("\n");
    
    return 0;
}






































