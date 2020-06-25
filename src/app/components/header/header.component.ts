import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const typed = new Typed('.typed', {
      strings: [''],

      stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
      startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false, // Alterar el orden en el que escribe las palabras.
      backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      //loopCount: false, Cantidad de veces a repetir el array.  false = infinite
      showCursor: true, // Mostrar cursor palpitanto
      cursorChar: '|', // Caracter para el cursor
      contentType: 'html' // 'html' o 'null' para texto sin formato
    });
    $(window).scroll(function() {
      if ($('nav').offset().top > 56) {
           $('nav').addClass('bg-secondary');
           $('a ').addClass('text-white');
           $('nav').removeClass('bg-transparent');
      }else{
        $('nav').addClass('bg-transparent');
        $('nav').removeClass('bg-secondary');
        $('a ').removeClass('text-dark');
        $('a').addClass('text-white');
      }
    });
    $('.links').click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
          destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
          destino = $('nav');
      }

      $('html, body').animate({
          scrollTop: destino.offset().top
      }, 1000, function() {
          $('.navbar-collapse').removeClass('show');

      });
      return false;
  });

  }

}
