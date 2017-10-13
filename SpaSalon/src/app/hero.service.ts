import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//const HERO: Hero[] = [
//    { id: 1, url:'', name: 'Luke Skywalker', height: 177, weight: 70, profession: '' },
//    { id: 2, url: '', name: 'Darth Vader', height: 200, weight: 100, profession: '' },
//    { id: 3, url: '', name: 'Han Solo', height: 185, weight: 85, profession: '' },
//];

@Injectable()
export class HeroService {
    private baseUrl: string = 'http://swapi.co/api';

    constructor(private http: Http) { }

    getHeroes(): Observable<Hero[]> {
        let hero = this.http.get(`https://jsonplaceholder.typicode.com/posts`)
            .map(this.mapHeros)
            .catch(this.handleError);
        return hero;
    //return Promise.resolve(HEROES);
    }

    private getHeaders() {
        // I included these headers because otherwise FireFox
        // will request text/html
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    private mapHeros(response: Response): Hero[] {
    //throw new Error('ups! Force choke!');

    // The response of the API has a results
        // property with the actual results
       // console.log(response.json().results);
       let heroes: Hero[] = [];
       let obj = response.json();
       for (let o of obj) {
           let hero = <Hero>({
               name: (o.title),
               height: 0,
               weight: 0,
               profession: ""
           });
           heroes.push(hero);
        }
            return heroes;
    }

    // this could also be a private method of the component class
private handleError(error: any) {
    // log error
    // could be something more sofisticated
    
    let errorMsg = `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`;
    console.error(errorMsg);

    // throw an application level error
    return Observable.throw(error);
}



  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Observable<Hero> {
      let hero = this.http
          .get('http://swapi.co/api/people/2')
          .map(this.mapHero)
          .catch(this.handleError);
      return hero;
  }

    private mapHero(response: Response): Hero {
    // toPerson looks just like in the previous example
        let obj = response.json();
        let hero = <Hero>({
            name: (obj.name),
            height: 0,
            weight: 0,
            profession: ""
        });
        
    return hero;
}

}
