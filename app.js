var app = new Vue({
  el: "#app",
  data: {
    perguntas: [],
    indice: 0,
    selecionado: 0,
    acertos: 0,
  },
  methods: {
    aumentaPergunta: function () {
      if (Number(this.selecionado) === Number(this.pergunta["opc"])) {
        return this.indice++, this.acertos++;
      } else {
        return alert("Resposta incorreta, tente novamente ou clique em 'Dica'");
      }
    },
  },
  computed: {
    pergunta: function () {
      return this.perguntas[this.indice];
    },
  },
  mounted: function () {
    fetch("db.json").then((res) => {
      res.json().then((json) => {
        this.perguntas = json;
      });
    });
  },
});
