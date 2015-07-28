var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Entidade = (function () {
    function Entidade() {
    }
    return Entidade;
})();
var Sexo = (function () {
    function Sexo(id, descricao) {
        this.id = id;
        this.descricao = descricao;
    }
    return Sexo;
})();
var SituacaoEntidade = (function () {
    function SituacaoEntidade(id, descricao) {
        this.id = id;
        this.descricao = descricao;
    }
    return SituacaoEntidade;
})();
var Nacionalidade = (function () {
    function Nacionalidade(id, descricao) {
        this.id = id;
        this.descricao = descricao;
    }
    return Nacionalidade;
})();
var Cpf = (function () {
    function Cpf(valor) {
        this.valor = valor;
    }
    return Cpf;
})();
var Documentacao = (function () {
    function Documentacao() {
    }
    return Documentacao;
})();
var Url = (function () {
    function Url() {
    }
    return Url;
})();
var Pessoa = (function (_super) {
    __extends(Pessoa, _super);
    function Pessoa() {
        _super.call(this);
        this.sexo = new Sexo("-1", "...");
        this.nacionalidade = new Nacionalidade("-1", "...");
        this.situacao = new SituacaoEntidade("-1", "...");
        this.documentacao = new Documentacao();
        this.documentacao.cpf = new Cpf("12312312387");
    }
    return Pessoa;
})(Entidade);
