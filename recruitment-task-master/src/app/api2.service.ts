import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = '/api';
const postID = 1;

export interface Comments {
  id: number;
  body: string;
  postId: number;
}

@Injectable()
export class ApiService2 {
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<Comments[]>(`${BASE_URL}/comments`);
  }
}
