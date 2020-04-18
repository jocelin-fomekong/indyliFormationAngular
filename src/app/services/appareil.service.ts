export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    } ,
    {
      id: 2,
      name: 'Télévision',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'allumé'
    }
  ];

  /**
   * La fonction find va aller chercher dans le tableau l'objet dont l'id correspond a l'id passé en paramètre
   * dans la fonction getAppareilById pour l'afficher
   * @param id
   */
  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  switchOnAll(){
    for (let appareil of this.appareils){
      appareil.status = 'allumé';
    }
  }

  switchOffAll(){
    for (let appareil of this.appareils){
      appareil.status = 'éteint';
    }
  }

  switchOnOne(index: number){
      this.appareils[index].status = 'allumé';
  }

  switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
  }
}
