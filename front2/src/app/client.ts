export class Client {

 nom!:string;
 prenom!:string;
 adresse!:string;
 tel!:string;
 codeconfidentiel!:string;
 email!:string;
 password!:string;
 cin!:string;

 name!:string;

 constructor(nom: string, prenom: string, adresse: string, tel: string, name: string, email: string, password: string, cin: string ){
  this.nom = nom;
  this.prenom = prenom;
  this.adresse = adresse;
  this.tel = tel;
  this.name=name;

  this.email = email;
  this.password = password;
  this.cin = cin;

}


}
