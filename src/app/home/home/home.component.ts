import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "src/app/services/data-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private service: DataServiceService) {
    console.log(service.data.home.title);
    console.log(service.data.home.text);
  }
  title: String = this.service.data.home.title;
  text: String = this.service.data.home.text;

  ngOnInit(): void {
    console.log("initial log");
    this.service.getDummyData().subscribe((res) => {
      console.log(res);
    });
  }
}
