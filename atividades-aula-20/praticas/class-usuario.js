class Usuario {
    //Classe pronta

    setId(id) {
        this.id = id;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setAtivo(ativo) {
        this.ativo = ativo;
    }

    setDocumento(documento) {
        this.documento = documento;
    }

    getId() {
        return this.id;
    }

    getNome() {
        return this.nome;
    }

    getAtivo() {
        return this.ativo;
    }

    getDocumento() {
        return this.documento;
    }
}

const usuario1 = new Usuario();
usuario1.setId(1);
usuario1.setNome('Ronaldo');
usuario1.setAtivo(true);
usuario1.setDocumento("11122233344");

usuario1.getAtivo();
usuario1.getDocumento();