import { Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { DataServiceService } from "src/app/services/data-service.service";

@Component({
  selector: "app-technology",
  templateUrl: "./technology.component.html",
  styleUrls: ["./technology.component.scss"],
})
export class TechnologyComponent implements OnInit {
  constructor(private service: DataServiceService) {
    console.log(service.data.technology.technologyArray);
  }
  techName = "LAUNCH VEHICLE";
  techInfo =
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
  techImage =
    "../../../assets/images/technology/image-launch-vehicle-portrait.jpg";

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    console.log("tabChangeEvent => ", tabChangeEvent);
    console.log("index => ", tabChangeEvent.index);
    console.log(tabChangeEvent);
    this.setData(tabChangeEvent.index);
  };
  setData(techIndex: any) {
    this.service.data.technology.technologyArray.forEach((element: any) => {
      if (techIndex === element.index) {
        this.techName = element.techName;
        this.techInfo = element.techInfo;
        this.techImage = element.techImage;
      }
    });
    console.log("technology works");
  }

  ngOnInit(): void {}
}
