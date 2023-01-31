var countGame = 0;
var secretNumber = Math.floor(Math.random() * 1001) + 1 ;
var namePlayer = prompt ("Digite o seu nome: ")

//Estrutura de repetição + estrutura condicional.
while (kickPlayer !== secretNumber){
	var kickPlayer = prompt(" Bem vindo(a)" +"\n"+ "Você terá no máximo 15 tentativas para acertar o número secreto!" +"\n"+ "Digite um número de 1 a 1000: ") 
  /*countGame é o contador de tentativas, a cada rodada é acrescido de uma unidade até o limite de 15 conforme critério definido no 1º else if*/
  countGame++;
 /* Explicando o teste condicional:
Teste condicional, vai permitir comparar o valor inserido pelo usuario e o número aleatorio disponibilizado pelo sistema, a estutura condicional é iniciada com o if "Se", e caso não seja satisfeita executará as demais estruturas esle if "Senão se", caso a estrutura seja satisfeita a estrutura de repetição while será encerrada pela função break inserida no bloco if. 
*/
  if (kickPlayer==secretNumber){
    alert("Olá, " + namePlayer + ", você chutou o nº: " + secretNumber + " e acertou, parabéns!")
    break
  } 
    else if (countGame==15){
    alert('Você atingiu o número máximo de tentativas!')
    break
  }
    else if (kickPlayer>secretNumber){
      alert("O número é menor que, " + kickPlayer + ", tente outra vez!")
  } 
  	else if (kickPlayer<secretNumber){
      alert("O número é maior que, " + kickPlayer + ", tente outra vez!")   
  }
}
alert(namePlayer + " você realizou " + countGame + " tentativas!");