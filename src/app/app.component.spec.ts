/* tslint:disable:no-unused-variable */
import { async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { INGFriend } from './i-ng-friend';
import { AppUsersService } from './app-users.service';

describe('AppComponent', () => {
    let service: any;
    let app: AppComponent;
    let mockResult: Array<INGFriend> = [
        { twitter: 'elecash', name: 'Raúl Jiménez' },
        { twitter: 'manekinekko', name: 'Wassim Chegham' },
        { twitter: 'gerardsans', name: 'Gerard Sans' },
        { twitter: 'webmaxru', name: 'Maxim Salnikov' },
        { twitter: 'ladyleet', name: 'Tracy Lee' },
        { twitter: 'sherrrylst', name: 'Sherry List' }
    ];

    beforeEach(() => {
        service = {
            getUsers: () => {
                return {
                    subscribe: (callback) => {
                        callback(mockResult);
                    }
                }
            }
        };

        app = new AppComponent(service as AppUsersService);
    });

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));

    it('should get the users', async(() => {
        spyOn(service, 'getUsers').and.callThrough();

        app.ngOnInit();

        expect(service.getUsers).toHaveBeenCalled();
        expect(app.ngFriends).toEqual(mockResult);
    }));
});
