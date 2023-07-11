console.log("Ejercicio 1")
/*2) Crear una matriz de 5 filas y n columnas (se pide al usuario). Rellenarlo con números aleatorios entre 0 y 10. */
let fila=5;//valor de fila 
let matriz=[];//guardo la matriz se inicializa vacia
let columna=parseInt(prompt("Ingrese el tamaño de su columna"));//ingrese el numero de columna
for (let i = 0; i < fila; i++) {//bucle for fila lo recorre
  matriz[i]=[];//se inaciliza la i 
    
    for (let j=0 ; j< columna; j++) {//bucle for para columna lo recorre
       matriz [i][j]= Math.round(Math.random()*10);//genera los numeros aletorios del 0 al 10 en fila y columna
      
    }
}
console.log(matriz)//imprime el valor de matriz con los numeros aletorios 



