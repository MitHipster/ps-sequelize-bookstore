import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/interfaces/book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-book',
	templateUrl: './add-book.component.html',
	styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
	constructor(private bookService: BookService, private router: Router) {}

	ngOnInit() {}

	saveBook(formValues: any): void {
		const newBook: Book = <Book>formValues;
		console.log(newBook);

		this.bookService
			.addBook(newBook)
			.subscribe(
				(data: Book) => console.log(data),
				(err: any) => console.log(err),
				() => this.router.navigate(['/books'])
			);
	}
}
