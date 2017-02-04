import { Component, OnInit } from '@angular/core';
import { INGFriend } from './i-ng-friend';
import { AppUsersService } from './app-users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
    ngFriends: Array<INGFriend> = [];

    constructor(private service: AppUsersService) {
    }

    ngOnInit() {
        this.service.getUsers().subscribe(
            (friends: INGFriend[]) => {
                this.ngFriends = friends;
            }
        );
    }
}
