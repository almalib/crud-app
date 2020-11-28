import { Injectable } from '@angular/core';
import mates from './files/mates.json';
import {MembersInterface} from './res/common.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudAppService {
  /**
   * Сохранение в переменной JSON объекта
   */
  public membersList: MembersInterface[] = mates;

  constructor() { }

  /**
   * Вывод в форме данных сотрудника при нажатии на кнопку изменить
   */
  public getMember(member: MembersInterface): MembersInterface {
    const index = this.membersList.indexOf(member);
    return this.membersList.find((item, idx) => {
      if (idx === index) {
        return item;
      }
    });
  }

  /**
   * Добавление в список нового сотрудника
   */
  public addNewMember(member: MembersInterface): void {
    this.membersList.push(member);
  }

  /**
   * Удаление сотрудника из списка
   */
  public deleteMember(item: MembersInterface): void {
    const index = this.membersList.indexOf(item);
    this.membersList.splice(index, 1);
  }

  /**
   * Изменение данных сотрудника
   */
  public memberEditor(member: MembersInterface, oldMember: MembersInterface): void {
    const index = this.membersList.indexOf(member);
    const changeMember = this.membersList.find((item, idx) => {
      if (idx === index) {
        return item;
      }
    });
    changeMember.name.first = oldMember.name.first;
    changeMember.name.last = oldMember.name.last;
    changeMember.email = oldMember.email;
    changeMember.age = oldMember.age;
  }
}
