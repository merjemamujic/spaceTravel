import { Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { DataServiceService } from "src/app/services/data-service.service";

@Component({
  selector: "app-destination",
  templateUrl: "./destination.component.html",
  styleUrls: ["./destination.component.scss"],
})
export class DestinationComponent implements OnInit {
  constructor(private service: DataServiceService) {
    console.log(service.data.destination.planetArray);
  }

  planetImg = "../../../assets/images/destination/image-moon.png";
  planet = "MOON";
  planetDescription =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  avgDistanceToPlanet = "  384,400 KM";
  avgTravelTIme = "3 DAYS";

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    console.log("tabChangeEvent => ", tabChangeEvent);
    console.log("index => ", tabChangeEvent.index);
    console.log(tabChangeEvent);
    this.setData(tabChangeEvent.index);
  };

  setData(planetIndex: any) {
    this.service.data.destination.planetArray.forEach((element: any) => {
      if (planetIndex === element.index) {
        this.planet = element.planet;
        this.planetDescription = element.planetDescription;
        this.avgDistanceToPlanet = element.avgDistanceToPlanet;
        this.avgTravelTIme = element.avgTravelTIme;
        this.planetImg = element.planetImg;
      }
    });
    console.log("destination works");
  }

  ngOnInit(): void {}
}
