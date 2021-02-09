import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class ActiveCasesService {
  constructor(private httpService: HttpService) {}

  findAll() {
    return this.httpService
      .get('https://covidtracking.com/api/us/daily', {
        headers: {
          Accept: 'application/json',
        },
      })
      .pipe(map((response) => response.data));
  }
}
