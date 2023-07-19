import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  data: any = {
    home: {
      title: "SO, YOU WANT TO TRAVEL TO",
      text:
        "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
    },
    destination: {
      planetArray: [
        {
          index: 0,
          planetSelector: "00 MOON",
          planet: "MOON",
          planetDescription: ` See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                    regain perspective and come back refreshed. While you’re there, take in some history 
                    by visiting the Luna 2 and Apollo 11 landing sites.`,
          avgDistanceToPlanet: "  384,400 KM",
          avgTravelTIme: "3 DAYS",
          planetImg: "../../../assets/images/destination/image-moon.png",
        },
        {
          index: 1,
          planetSelector: "01 MARS",
          planet: "MARS",
          planetDescription: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                    the tallest planetary mountain in our solar system. It’s two and a half times 
                    the size of Everest!`,
          avgDistanceToPlanet: " 225 MIL. KM",
          avgTravelTIme: "9 MONTHS",
          planetImg: "../../../assets/images/destination/image-mars.png",
        },
        {
          index: 2,
          planetSelector: "02 EUROPA",
          planet: "EUROPA",
          planetDescription: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                    ice skating, curling, hockey, or simple relaxation in your snug 
                    wintery cabin.`,
          avgDistanceToPlanet: "628 MIL. KM",
          avgTravelTIme: "3 YEARS",
          planetImg: "../../../assets/images/destination/image-europa.png",
        },
        {
          index: 3,
          planetSelector: "03 TITAN",
          planet: "TITAN",
          planetDescription: ` The only moon known to have a dense atmosphere other than Earth, Titan 
                    is a home away from home (just a few hundred degrees colder!). As a 
                    bonus, you get striking views of the Rings of Saturn.`,
          avgDistanceToPlanet: "1.6 BIL. KM",
          avgTravelTIme: "7 YEARS",
          planetImg: "../../../assets/images/destination/image-titan.png",
        },
      ],
    },
    crew: {
      crewArray: [
        {
          index: 0,
          crewTitle: "COMMANDER",
          crewName: "DOUGLAS HURLEY",
          crewInfo:
            "  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          crewImage: "../../../assets/images/crew/image-douglas-hurley.png",
        },
        {
          index: 1,
          crewTitle: "MISSION SPECIALIST",
          crewName: "MARK SHUTTLEWORTH",
          crewInfo:
            "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          crewImage: "../../../assets/images/crew/image-mark-shuttleworth.png",
        },
        {
          index: 2,
          crewTitle: "PILOT",
          crewName: "VICTOR GLOVER",
          crewInfo:
            "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
          crewImage: "../../../assets/images/crew/image-victor-glover.png",
        },
        {
          index: 3,
          crewTitle: "FLIGHT ENGINEER",
          crewName: "ANOUSHEH ANSARI",
          crewInfo:
            "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
          crewImage: "../../../assets/images/crew/image-anousheh-ansari.png",
        },
      ],
    },
    technology: {
      technologyArray: [
        {
          index: 0,
          techName: "LAUNCH VEHICLE",
          techInfo:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          techImage:
            "../../../assets/images/technology/image-launch-vehicle-portrait.jpg",
        },
        {
          index: 1,
          techName: "SPACEPORT",
          techInfo:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
          techImage:
            "../../../assets/images/technology/image-spaceport-portrait.jpg",
        },
        {
          index: 2,
          techName: "SPACE CAPSULE",
          techInfo:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          techImage:
            "../../../assets/images/technology/image-space-capsule-portrait.jpg",
        },
      ],
    },
  };
  constructor(private http: HttpClient) {}

  getDummyData(): Observable<any> {
    return this.http.get("http://localhost:50/api/stories");
  }
}
