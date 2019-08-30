import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  userName: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userName = this.userService.getFirstUser();
  }

}
