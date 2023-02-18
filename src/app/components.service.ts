import { ComponentRouteList } from './interfaces/component-route-list';
import { AplicativosComponent } from './modulos/aplicativos/aplicativos.component';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  private components: ComponentRouteList[] = [
    {
      component: AplicativosComponent,
      codAplicacao: 'MENU',
    },
  ];
  constructor() {}
  getComponents() {
    return this.components;
  }
}
