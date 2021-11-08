// Exercício 1
console.log("Exercício 1\n-----------")
const texto1 = `Maria foi ao Na Hora e recebeu seu novo CPF (772.843.809-34), porém, para confirmar o número do seu novo documento, foi pedido que na hora de digitar no sistema, que digitasse sem a pontuação, então ela digitou 77284380934.`

console.log(texto1.match(/(\d{3}\.\d{3}\.\d{3}-\d{2})|\d{11}/g))


// Exercício 2
console.log("Exercício 2\n-----------")
const texto2 = `O sistema vai parar para uma manutenção programada no dia 10/09/2020 às 23:00.`

const data = texto2.match(/([1-9]|(0[1-9])|(1[012]))\/(0[1-9]|[1-9]|[12][0-9]|3[01])\/(\d{4}|\d{2})/g)
console.log(data)

const hora = texto2.match(/([01]\d|(2[0-4])):[0-5][0-9]/g)
console.log(hora)

// Exercício 3
console.log("Exercício 3\n-----------")

const texto3 = `<html>
<head><title>Exercícios</title></head>
<body>
  <p>Menu</p>
  <ul>
	<li><a href="https://google.com">Google</a></li>
  </ul>
</html>`

const href = texto3.match(/href="(.*?)"/)[1]
console.log(href)

// Exercício 4
console.log("Exercício 4\n-----------")

const texto4 = `<html>
<head><title>Exercícios</title></head>
<body>
  <h1>Exercícios</h1>
  <table>
	<thead>
	  <th>#</th>
	  <th>Questão</th>
	</thead>
	<tbody>
	  <tr>
		<td>1</td>
		<td>Primeiro exercício de regex</td>
	  </tr>
	  <h1> oi</h1>
	</tbody>
  </table>
</html>`

console.log(texto4.match(/<h1>(.*?)<\/h1>/)[1])