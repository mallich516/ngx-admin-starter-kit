import {
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/internal/operators/catchError";
import { retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
  
export class NetworkserviceService {
  
  post: Post;

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<HttpResponse<Array<Post>>> {
    return this.http
      .get<Array<Post>>("https://jsonplaceholder.typicode.com/posts", {
        observe: "response",
        responseType: "json",
      }).pipe(retry(3), catchError(this.handleError));
  }

  getPost(id: string): Observable<HttpResponse<Post>> {
    return this.http.get<Post>("https://jsonplaceholder.typicode.com/posts/" + id, {
      observe: "response",
      responseType: "json"
    }).pipe(retry(3), catchError(this.handleError))
  }

  sendPost(json: String): Observable<Post> {
    return this.http
      .post<Post>(
        "https://jsonplaceholder.typicode.com/posts",
        json,
        this.httpOptions
      ).pipe(catchError(this.handleError));
  }

  getAllProducts(): Observable<any> {
    // let headerss = new HttpHeaders({
    //   'Access-Control-Allow-Origin': 'http://localhost:8080',
    //   'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    //   'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    //   'Access-Control-Allow-Credentials': 'true'
    // })
    return this.http.get<any>("http://localhost:8080/RESTAPI/rest/products", {
      observe: "response",
      responseType: "json"
    }).pipe(retry(3), catchError(this.handleError));
  }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json",
      // Authorization: "auth-token",
    }),
  };  

  handleError(handleError: HttpErrorResponse) {
    let errorMessage = ''
    if(handleError.error instanceof ErrorEvent) {
      // Client side error
      errorMessage = `Error : ${handleError.error.message}`;
    } else {
      // Server side error
      errorMessage = `Error Code : ${handleError.status}`;
    }
    return throwError(handleError);
  }

  getLocalPost() {
    return this.post;
  }

  setLocalPost(post: Post) {
    this.post = post;
  }

}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Products {
  product: Array<Product>;
}

export interface Product {
    brand: string,
    cost: string,
    id: string,
    name: string,
    offerPercentage: string,
    offerRate: string,
    quantity: string
}
