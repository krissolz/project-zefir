import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../core/models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksListComponent implements OnInit {

  public booksTitle: string;
  public books: Book[];
  public howMany: number;

  constructor(
    private router: Router
  ) {
    this.booksTitle = 'Books list';
    this.books = [
      {
          "id": "08e79873-950a-4648-abd8-9f2381d09105",
          "title": "Moby Dick",
          "author": "Herman Melville",
          "isbn": "1503280780",
          "price": 12.47,
          "description": "With an Introduction and Notes by David Herd, Lecturer in English and American Literature at the University of Kent at Canterbury and co-editor of 'Poetry Review'.\n\r\n\r Moby Dick is the story of Captain Ahab's quest to avenge the whale that `reaped' his leg. The quest is an obsession and the novel is a diabolical study of how a man becomes a fanatic.\n\r\n\r But it is also a hymn to democracy. Bent as the crew is on Ahab's appalling crusade, it is equally the image of a co-operative community at work: all hands dependent on all hands, each individual responsible for the security of each.",
          "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5032/9781503280786.jpg"
      },
      {
          "id": "3f02b9d8-58d6-4243-9df2-4be419ab1e57",
          "title": "A Brief History of Time",
          "author": "Stephen Hawking",
          "isbn": "9780553380163",
          "price": 12.44,
          "description": "In the ten years since its publication in 1988, Stephen Hawking's classic work has become a landmark volume in scientific writing, with more than nine million copies in forty languages sold worldwide. That edition was on the cutting edge of what was then known about the origins and nature of the universe. But the intervening years have seen extraordinary advances in the technology of observing both the micro- and the macrocosmic worlds. These observations have confirmed many of Professor Hawking's theoretical predictions in the first edition of his book, including the recent discoveries of the Cosmic Background Explorer satellite (COBE), which probed back in time to within 300,000 years of the universe's beginning and revealed wrinkles in the fabric of space-time that he had projected. Eager to bring to his original text the new knowledge revealed by these observations, as well as his own recent research, Professor Hawking has prepared a new introduction to the book, written an entirely new chapter on wormholes and time travel, and updated the chapters throughout.",
          "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5533/9780553380163.jpg"
      },
      {
          "id": "5a26f31c-6037-47be-9c7f-64a49275419c",
          "title": "The Catcher in the Rye",
          "author": "J. D. Salinger",
          "isbn": "9780316769174",
          "price": 8.59,
          "description": "The 'brilliant, funny, meaningful novel' (The New Yorker) that established J. D. Salinger as a leading voice in American literature--and that has instilled in millions of readers around the world a lifelong love of books.\n\r'If you really want to hear about it, the first thing you'll probably want to know is where I was born, and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth.'\n\rThe hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caufield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days.",
          "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3167/9780316769174.jpg"
      },
      {
          "id": "57895069-95e5-40a2-b267-c77c68d0c1c8",
          "title": "Great Expectations",
          "author": "Charles Dickns",
          "isbn": "9780141439563",
          "price": 7.99,
          "description": "'His novels will endure as long as the language itself' Peter Ackroyd\n\r\n\rDickens's haunting late novel depicts the education and development of a young man, Pip, as his life is changed by a series of events - a terrifying encounter with an escaped convict in a graveyard on the wild Kent marshes; a summons to meet the bitter, decaying Miss Havisham and her beautiful, cold-hearted ward Estella; the sudden generosity of a mysterious benefactor - and he discovers the true nature of his 'great expectations'. This definitive edition includes appendices on Dickens's original ending, giving an illuminating glimpse into a great novelist at work.\n\r\n\rWith an Introduction by DAVID TROTTER\n\rEdited and with notes by CHARLOTTE MITCHELL",
          "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1414/9780141439563.jpg"
      },
      {
          "id": "9781853260629-950a-4648-abd8-9f2381d0",
          "title": "War and Peace",
          "author": "Leo Tolstoy",
          "isbn": "1853260622",
          "price": 7.25,
          "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8532/9781853260629.jpg",
          "description": "War and Peace is a vast epic centred on Napoleon's war with Russia. While it expresses Tolstoy's view that history is an inexorable process which man cannot influence, he peoples his great novel with a cast of over five hundred characters. \n\r\n\r Three of these, the artless and delightful Natasha Rostov, the world-weary Prince Andrew Bolkonsky and the idealistic Pierre Bezukhov illustrate Tolstoy's philosophy in this novel of unquestioned mastery. This translation is one which received Tolstoy's approval."
      },
      {
          "id": "08e79873-950a-4648-abd8-9f2381d09105-2",
          "title": "Moby Dick II",
          "author": "Herman Melville",
          "isbn": "1503280780",
          "price": 11.47,
          "description": "With an Introduction and Notes by David Herd, Lecturer in English and American Literature at the University of Kent at Canterbury and co-editor of 'Poetry Review'.\n\r\n\r Moby Dick is the story of Captain Ahab's quest to avenge the whale that `reaped' his leg. The quest is an obsession and the novel is a diabolical study of how a man becomes a fanatic.\n\r\n\r But it is also a hymn to democracy. Bent as the crew is on Ahab's appalling crusade, it is equally the image of a co-operative community at work: all hands dependent on all hands, each individual responsible for the security of each.",
          "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5032/9781503280786.jpg"
      },];
    this.howMany = 5;
  }

  goToCart(): void {
    this.router.navigate(['/mycart']);
  }

  ngOnInit() {
    console.log(this.books);
  }

}
