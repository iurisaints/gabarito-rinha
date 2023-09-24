/*# Calculadora de Geometria
Implemente uma classe que calcule a área de diferentes formas geométricas, como círculos, triângulos e quadrados. Permita ao usuário escolher a forma e inserir os dados necessários.*/

class CalculadoraGeometria {
    static calcularAreaForma(forma, dados) {
      switch (forma) {
        case "círculo":
          const raio = dados.raio;
          return Math.PI * raio * raio;
        case "triângulo":
          const base = dados.base;
          const altura = dados.altura;
          return (base * altura) / 2;
        case "quadrado":
          const lado = dados.lado;
          return lado * lado;
        default:
          return "Forma não suportada.";
      }
    }
  }
  
  const forma = "círculo"; // Substitua pela forma desejada: "círculo", "triângulo" ou "quadrado"
  const dadosForma = {
    raio: 5, // Substitua pelos dados necessários para cada forma
  };
  
  const area = CalculadoraGeometria.calcularAreaForma(forma, dadosForma);
  console.log(`A área do ${forma} é: ${area}`);
  