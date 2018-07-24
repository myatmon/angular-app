import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {Hero } from './Hero';
import {HEROES} from './mock-heroes';





@Injectable({
  providedIn: 'root'
})
export class MessageService {

	messages: string[] = [];

	add(message:string){
		this.messages.push(message);
	}

	clear(){
		this.messages = [];
	}

	constructor(private messageService: MessageService)  { }
}
