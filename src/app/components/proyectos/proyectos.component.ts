import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-proyectos",
  templateUrl: "./proyectos.component.html",
  styleUrls: ["./proyectos.component.css"]
})
export class ProyectosComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $("#githubI").on("click", () => {
      window.open("https://github.com/JoelGuerrero03/Inovix");
    });
    $("#inovix").on("click", () => {
      window.open("www.inovix.website");
    });
    $("#people").on("click", () => {
      window.open("http://peopleinmotion.000webhostapp.com/index.html");
    });
  }
}
