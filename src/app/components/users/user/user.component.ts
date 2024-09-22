import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../_interfaces/User';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent{
  @Input() user: User | undefined;
}
