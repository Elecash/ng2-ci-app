import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INGFriend } from './i-ng-friend';

@Injectable()
export class AppUsersService {

    constructor() {}

    private mockedService(): Array<any> {
        return [require('../../node_modules/ng2-ci-api/dist/users.json')];
    }

    getUsers(): Observable<INGFriend[]> {
        return Observable
            .from(this.mockedService())
            .map(res => res as INGFriend[]);
    }
}
