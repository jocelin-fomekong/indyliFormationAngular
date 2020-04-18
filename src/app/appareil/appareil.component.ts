import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }
  getStatus(){
    return this.appareilStatus;
  }
  onClick() {
  }
  getColor(){
    if(this.appareilStatus === 'allumé'){
      return 'green';
    }else if(this.appareilStatus === 'éteint'){
      return 'red';
    }
  }

  /**
   * Cette méthode fait appel a la méthode du service contenu dans appareil service
   */
  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  /**
   * Cette méthode fait appel a la méthode du service contenu dans appareil service
   */
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
