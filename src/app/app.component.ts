import { Component, OnInit } from '@angular/core';

interface Student {
  id: number;
  fullName: string;
  birthdate: Date;
  faculty: string;
  marked?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // title = 'angular-lab';
  title: string;
  students: Student[];

  constructor() {
    this.title = 'List of Students';
  }

  ngOnInit() {
    this.students = this.getStudents();
  }

  getStudents(): Student[] {
    const studentList = [
      {
        id: 1,
        fullName: 'Mate Matic',
        birthdate: new Date (1995, 10, 25),
        faculty: 'FESB'
      },
      {
        id: 2,
        fullName: 'Ivo Ivic',
        birthdate: new Date (1995, 11, 15),
        faculty: 'FER'
      },
      {
        id: 1,
        fullName: 'Ante Antic',
        birthdate: new Date (1995, 11, 29),
        faculty: 'FESB'
      }
    ];
    return studentList;
  }


}
