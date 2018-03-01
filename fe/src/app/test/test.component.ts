import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @ViewChild('f') testForm: NgForm;
  public textArr = [];
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getTestData() {
    this.http.get('http://localhost:3000/test')
      .subscribe(
        data => {
          this.textArr = data['obj'].map(val => val['text']);
        },
        error => {
          console.log(error);
        }
      );
  }

  sendTestData(text) {
    let body = JSON.stringify(text);
    this.http.post('http://localhost:3000/test', body, this.httpOptions)
      .subscribe(
        data => {
          this.testForm.resetForm();
          this.getTestData();
        },
        error => {
          console.log(error)
        }
      )
  }

  constructor(private http: HttpClient) {}
  onSubmit(form: NgForm) {
    this.sendTestData(form.value)
  }
  ngOnInit() {
    this.getTestData()
  }
}