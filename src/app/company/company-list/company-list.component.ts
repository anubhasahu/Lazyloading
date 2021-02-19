import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companys = [
    { code: 1001, name: "HCL" },
    { code: 1002, name: "TCS" },
    { code: 1003, name: "Nokia" }
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
