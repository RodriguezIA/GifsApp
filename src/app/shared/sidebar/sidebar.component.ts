import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private gifService: GifsService) { }

  get historial() {
    return this.gifService.historial;
  }


  buscar(query: string) {
    return this.gifService.buscarGifs(query);
  }


  ngOnInit(): void {

  }

}
