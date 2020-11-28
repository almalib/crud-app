import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CrudAppService} from '../crud-app.service';
import {MembersInterface} from '../res/common.interface';
import {OverlayRef} from '@angular/cdk/overlay';

@Component({
  selector: 'app-add-member-modal',
  templateUrl: './add-member-modal.component.html',
  styleUrls: ['./add-member-modal.component.scss']
})
export class AddMemberModalComponent implements OnInit {

  /**
   *
   */
  @Input() overlayRef: {
    overlayRef: OverlayRef;
    item: MembersInterface;
  };

  /**
   *
   */
  public member: MembersInterface = {
    age: 0,
    name: {
      first: '',
      last: '',
    }
  };

  constructor(private crudService: CrudAppService) { }

  ngOnInit(): void {
    if (this.overlayRef.item !== null) {
      this.member = this.crudService.getMember(this.overlayRef.item);
    }
  }

  /**
   * Закрытие модального окна добавления сотрудника
   */
  public closeAddMemberModal(
    event: MouseEvent,
    el: HTMLElement
  ): void {
      if (event.target === el) {
        this.overlayRef.overlayRef?.detach();
      }
  }

  /**
   * Добавление нового сотрудника при нажатии
   */
  public onSubmit(form: NgForm): void {
      if (form.valid) {
        this.overlayRef.overlayRef?.detach();
        const members = {
          age: form.value.age,
          name: {
            first: form.value.first,
            last: form.value.last,
          }
        };

        if (this.overlayRef.item === null) {
          this.crudService.addNewMember(members);
        } else {
          this.crudService.memberEditor(this.member, members);
        }
      }
      }

}
