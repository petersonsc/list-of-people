import { Component, OnInit } from '@angular/core';
import { People } from '../service/http/people.model';
import { PeopleService } from '../service/http/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  listOfPeople: People[] = [];
  cardOpened: number = null;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe((data: People) => this.listOfPeople.push(data));
  }

  openCard(person: People) {
    if (person.id === this.cardOpened) {
      this.cardOpened = null;
    } else {
      this.cardOpened = person.id;
    }
  }

}
