import { Component, OnInit } from "@angular/core";
import { MessageService } from "../../services/message.service";
import swal from'sweetalert2';
@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.css"]
})
export class ContactoComponent implements OnInit {
  titularAlerta:string='';
  constructor(public _MessageService: MessageService) {}
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      swal.fire('Enviado Correctamente', this.titularAlerta, 'success');
    });
  }

  ngOnInit() {

  }
}
