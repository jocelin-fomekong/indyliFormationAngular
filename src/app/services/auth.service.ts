export class AuthService {
  /**
   * Variable de connexion
   */
  isAuth = false;

  /**
   * fonction de connexion a l'apli.
   * ici c'est juste simulé; la valeur de la propriété isAuth change aprés 2 sec
   * pour dire que le user est bien connecté
   */
  signIn(){
    return new Promise(
      (resolve, reject)=> {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }

  /**
   * fonction de deconnexion
   */
  signOut(){
    this.isAuth = false;
  }
}
