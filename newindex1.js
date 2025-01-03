class hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    ataque(){
   let atacar;
    if (this.tipo === "mago"){
        atacar = "magia"}
    else if (this.tipo === "guerreiro"){
        atacar = "espada"}
    else if (this.tipo === "monge"){
        atacar = "artes marciais"}
    else if (this.tipo === "ninja"){
        atacar = "shuriken"}
    return atacar
    } 
    escrever(){
    console.log(`O ${this.nome} atacou usando ${this.ataque()}`)
    }
}
 
let guest = new hero("David", 24, "guerreiro")

guest.escrever()


