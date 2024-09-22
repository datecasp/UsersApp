import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { User } from '../../../_interfaces/User';
import { UserService } from '../../../_services/user.service';
import { UserFilterPipe } from '../../../_pipes/user-filter.pipe';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserComponent, UserFilterPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  usersList: User[] | undefined;
  nameFilter: string = '';
  pipeFilter: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.usersList = users;
    });
  }

  FilterByName(filter: string) {
    this.nameFilter = filter;
    this.pipeFilter = filter;
  }
}
