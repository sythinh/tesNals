import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiListService {
  API_URL = `https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs`;
  constructor(
    private http: HttpClient
  ) { }

  getListBlogPagintion(page: number, itemsPerPage: number, search:string): Observable<BlogList[]> {
    if (search) {
      return this.http.get<BlogList[]>(`${this.API_URL}?search=${search}&page=${page}&limit=${itemsPerPage}`);
    } else   {
      return this.http.get<BlogList[]>(`${this.API_URL}?page=${page}&limit=${itemsPerPage}`);
    }
    
  }

  getListAllBlog(): Observable<BlogList[]> {
    return this.http.get<BlogList[]>(this.API_URL);
  }
  getListSearch(name:string, pageNumber: number, itemsPerPage: number ): Observable<BlogList[]> {
    if (pageNumber >= 2) {
      return this.http.get<BlogList[]>(`${this.API_URL}?search=${name}&page=${pageNumber}&limit=${itemsPerPage}`);
    } else {
      return this.http.get<BlogList[]>(`${this.API_URL}?search=${name}`);
    }
    
  }
  getDetailList(id:string): Observable<BlogList> {
      return this.http.get<BlogList>(`${this.API_URL}/${id}`);
  }
  editBlog(id:string,data:any): Observable<BlogList> {
    return this.http.put<BlogList>(`${this.API_URL}/${id}`,data);
  }
  addNewBlog (data:any): Observable<BlogList> {
    return this.http.post<BlogList>(this.API_URL,data);
  }
}

interface BlogList {
  id: number;
  title: string
  image: String;
  content: string;
  createdAt:string
}
