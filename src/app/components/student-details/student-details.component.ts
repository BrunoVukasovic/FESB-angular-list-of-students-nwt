import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IStudent } from 'src/app/models/student.model';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit, OnDestroy {
  student: IStudent;
  private subscription: any;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      console.log(params);
      this.studentService.getStudents().subscribe(
        (students: IStudent[]) => {
          console.log(students);
          this.student = students.find(
            (s: IStudent) => s.id === +params['id']);
        });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
