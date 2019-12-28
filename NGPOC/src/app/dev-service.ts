import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Comment }           from '../app/comment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx'
import { Employee } from './employee';

@Injectable()
export class DevService {
    constructor (private http: Http) {}
     // private instance variable to hold base url
     private getUrl = 'https://localhost:44358/api/values'; 

     getComments() : Observable<Comment[]> {
        // ...using get request
        return this.http.get(this.getUrl).map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    postComments() : Observable<Comment[]> {
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON

        // ...using get request
        return this.http.post(this.getUrl,"","").map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    putComments() : Observable<Comment[]> {
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON

        // ...using get request
        return this.http.put(this.getUrl+"/1","","").map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getEmpData() : Observable<Employee[]> {
        // ...using get request
        return this.http.get(this.getUrl).map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getUsers(): Observable<Employee[]> {
        return Observable.create(() => {
            this.http.get(this.getUrl).map(response => response.json());
        })
    }

    
}
