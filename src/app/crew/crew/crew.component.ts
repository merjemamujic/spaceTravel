import { Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { DataServiceService } from "src/app/services/data-service.service";

@Component({
  selector: "app-crew",
  templateUrl: "./crew.component.html",
  styleUrls: ["./crew.component.scss"],
})
export class CrewComponent implements OnInit {
  constructor(private service: DataServiceService) {
    console.log(service.data.crew.crewArray);
  }

  crewTitle = "COMMANDER";
  crewName = "DOUGLAS HURLEY";
  crewInfo =
    "  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
  crewImage = "../../../assets/images/crew/image-douglas-hurley.png";

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    console.log("tabChangeEvent => ", tabChangeEvent);
    console.log("index => ", tabChangeEvent.index);
    console.log(tabChangeEvent);
    this.setData(tabChangeEvent.index);
  };

  setData(crewIndex: any) {
    this.service.data.crew.crewArray.forEach((element: any) => {
      if (crewIndex === element.index) {
        this.crewTitle = element.crewTitle;
        this.crewName = element.crewName;
        this.crewInfo = element.crewInfo;
        this.crewImage = element.crewImage;
      }
    });
    console.log("crew works");
  }

  ngOnInit(): void {}
}
