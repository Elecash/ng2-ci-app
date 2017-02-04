/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { AppUsersService } from './app-users.service';

describe('AppUsersService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ AppUsersService ]
        });
    });

    it('should ...', inject([ AppUsersService ], (service: AppUsersService) => {
        expect(service).toBeTruthy();
    }));
});
