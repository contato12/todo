import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  taskList: any[] = [];
  key = 'taskList';

  constructor() { }

  salvar(tarefa: any, callback = null) {
    tarefa.status = 'Pendente';

    let value = localStorage.getItem(this.key);

    if (value == null || value == undefined) {
      this.taskList.push(tarefa);
      localStorage.setItem(this.key, JSON.stringify(this.taskList));
    } else {
      let storageList: any[] = JSON.parse(value);
      storageList.push(tarefa);
      localStorage.setItem(this.key, JSON.stringify(storageList));
    }

    if (callback != null) {
      callback;
    }
  }

}
