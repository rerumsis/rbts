interface Enum {
    id: string;
    descricao: string;
}
class Entidade {
    nome: string;
}

class Sexo implements Enum {
    constructor(public id: string, public descricao: string) { }
}

class SituacaoEntidade implements Enum {
    constructor(public id: string, public descricao: string) { }
}

class Nacionalidade implements Enum {
    constructor(public id: string, public descricao: string) { }
}

class Cpf {
    constructor(public valor: string) { }
}

class Documentacao {
    cpf: Cpf;
    identidade: string;
    orgaoEmissor: string;
    dataExpedicao: string;
}

class Url {
    href: string;
}

class Pessoa extends Entidade {
    sexo: Sexo;
    dataNascimento: Date;
    nacionalidade: Nacionalidade;
    naturalidade: string;
    situacao: SituacaoEntidade;
    profissao: string;
    site: Url;
    observacao: string;
    documentacao: Documentacao;

    constructor() {
        super();
        this.sexo = new Sexo("-1", "...");
        this.nacionalidade = new Nacionalidade("-1", "...");
        this.situacao = new SituacaoEntidade("-1", "...");
        this.documentacao = new Documentacao();
        this.documentacao.cpf = new Cpf("12312312387");
    }
}
