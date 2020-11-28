import {Component, OnInit} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {AddMemberModalComponent} from '../add-member-modal/add-member-modal.component';
import {CrudAppService} from '../crud-app.service';
import {MembersInterface} from '../res/common.interface';

@Component({
  selector: 'app-list-of-members',
  templateUrl: './list-of-members.component.html',
  styleUrls: ['./list-of-members.component.scss']
})
export class ListOfMembersComponent implements OnInit {

  constructor(
    private overlay: Overlay,
    private crudService: CrudAppService
  ) { }

  ngOnInit(): void {
  }

  /**
   *
   */
  public getMemberList(): MembersInterface[] {
    return this.crudService.membersList;
  }

  /**
   *
   */
  public addMemberModal(item: MembersInterface): void {
    const overlayRef = this.overlay.create({
      height: '100%',
      width: '100%',
    });
    const portal = new ComponentPortal(
      AddMemberModalComponent
    );
    overlayRef.attach(portal).instance.overlayRef = {overlayRef, item};
  }

  /**
   * Удаление сотрудника из списка
   */
  public deleteMember(item: MembersInterface): void {
    this.crudService.deleteMember(item);
  }

}
