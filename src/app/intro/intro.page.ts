import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

    slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title: "Mi biblioteca",
      subtitle: "El espacio",
      img: "https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1",
      description: "El sistema solar es un conjunto de objetos astronómicos que giran directa o indirectamente en una órbita alrededor de una única estrella conocida con el nombre de Sol."
    },

    {
      title: "Mi biblioteca",
      subtitle: "Videojuegos",
      img: "https://i.blogs.es/2b5a55/mwii-season-01-roadmap-004/840_560.jpeg",
      description: "Call of Duty: Warzone 2.0 es un videojuego de Battle Royale gratuito que se lanzó para PlayStation 4, PlayStation 5, Xbox One, Microsoft Windows y Xbox Series X|S.​​"
    },

    {
      title: "Mi biblioteca",
      subtitle: "Ionic",
      img: "https://profile.es/wp-content/media/ionic-min.png",
      description: "Ionic es un SDK completo de código abierto para el desarrollo de aplicaciones móviles híbridas."
    },

    {
      title: "Mi biblioteca",
      subtitle: "El principito",
      img: "https://www.elcato.org/sites/default/files/images/stories/el-principito.jpg",
      description: "El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry."
    },

  ]

  constructor(private router: Router, private storage: Storage) { 
   
  }
  
  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");

  }
  ngOnInit() {
  }

}
