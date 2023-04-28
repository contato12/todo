import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertController, private tarefaService: TarefaService) { }

  async showAdd() {
    const alert = await this.alertCtrl.create({
      header: "Informe a tarefa:",
      inputs: [
        {
          name: 'tarefa',
          type: 'text',
          placeholder: 'Descreva . . .',
        }
      ],
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'salvar',
          handler: (tarefa) => {
            this.tarefaService.salvar(tarefa);
          }
        },
      ]
    });
    await alert.present();
  }
}
