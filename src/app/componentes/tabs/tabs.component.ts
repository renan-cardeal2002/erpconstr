import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  public tabs: any = [];
  public active: any;
  private tabSubscription: Subscription;
  constructor(private tabService: TabsService) {
    this.tabSubscription = this.tabService
      .onTabAction()
      .subscribe((data: any) => {
        if (data.action == 'new') {
          this.adicionar(data.data);
        }
      });
  }

  ngOnInit(): void {
    this.tabs.push({
      aplicativo: {
        nome: 'Menu',
        codAplicacao: 'MENU',
      },
    });
  }

  adicionar(tab: any) {
    let index = this.tabs.findIndex((t: any) => {
      return t.aplicativo.codAplicacao == tab.aplicativo.codAplicacao;
    });
    if (index > 0) {
      this.active = index;
      return;
    }
    this.tabs.push(tab);
    this.active = this.tabs.length - 1;
  }

  closeTab(event: MouseEvent, indexRemover: number) {
    if (this.active == this.tabs.length - 1) {
      this.active = indexRemover - 1;
    }

    this.tabs.splice(indexRemover, 1);
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}
