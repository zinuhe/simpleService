import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  userName: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userName = this.userService.getFirstUser();

  }

}
