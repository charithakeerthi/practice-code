import { Injectable } from '@angular/core';
import { OtherserviceService } from './otherservice.service';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  list: number[] = [100];
  bookUrl: string = 'http://localhost:3000/Book';
  invalidurl = "http://localhost:3000/invalid";

  constructor(private otherService: OtherserviceService, private http: HttpClient) { }

  getText() {
    return "This is a text";
  }

  getText2() {
    return "Text From Service 2";
  }

  getOther() {
    return this.otherService.getOtherText();
  }

  addNum(val: number) {
    this.list.push(val);
  }

  getList() {
    return this.list;
  }

  // get
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl, { responseType: 'json' });
  }

  // // filter 
  // filterBooks(name: string, category: string): Observable<Book[]> {
  //   return this.http.get<Book[]>(this.bookUrl + '?name=' + name + '&category=' + category);
  // }

  //filter - httpHeaders 
  filterBooks(name: string, category: string): Observable<Book[]> {
    let httpHeaders = new HttpHeaders()
      .set("Accept", "application/json")

    return this.http.get<Book[]>(this.bookUrl + '?name=' + name + '&category=' + category, {
      headers: httpHeaders,
      responseType: 'json'
    });
  }

  //HttpHeaders and HttpParams
  filterBooks2(name: string, category: string): Observable<Book[]> {
    //return this.http.get<Book[]>(this.bookUrl + '?name=' + name + '&category=' + category);

    let httpHeaders = new HttpHeaders()
      .set("Accept", "application/json")

    let httpParams = new HttpParams()
      .set('name', name)
      .set('category', category)

    return this.http.get<Book[]>(this.bookUrl, {
      headers: httpHeaders,
      params: httpParams,
      responseType: 'json'
    });
  }

  //Error Handling
  getBookWithError(): Observable<any> {
    return this.http.get(this.invalidurl);
  }

  // create
  createBook(book: Book): Observable<any> {
    let httpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")


    return this.http.post(this.bookUrl, book, {
      headers: httpHeaders
    });
  }

  // update
  UpdateBook(book: Book): Observable<any> {

    let httpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")

    return this.http.put(this.bookUrl + "/" + book.id, book, {
      headers: httpHeaders
    });
  }

  // delete
  deleteBook(bookId: number): Observable<any> {
    let httpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")

    return this.http.delete(this.bookUrl + "/" + bookId, {
      headers: httpHeaders
    });
  }


}
