// tslint:disable:max-line-length
import { Component } from '@angular/core';

@Component({
  selector: 'app-ref-list-example',
  templateUrl: './ref-list-example.component.html',
  styleUrls: ['./ref-list-example.component.scss']
})
export class RefListExampleComponent {

  public index = 0;
  public typesOfShoes: any[] = [{
    id: '1',
    title: 'new title',
    subtitle: 'new subtitle',
    img: 'https://placeimg.com/640/480/any?id=1',
  },
  {
    id: '2',
    title: 'new title',
    subtitle: 'new subtitle',
    img: 'https://placeimg.com/640/480/any?id=2',
  },
  {
    id: '3',
    title: 'new title',
    subtitle: 'new subtitle',
    img: 'https://placeimg.com/640/480/any?id=3',
  },
  {
    id: '4',
    title: 'new title2',
    img: 'https://placeimg.com/640/480/any?id=4',
  },
  {
    id: '5',
    title: 'new title2',
    subtitle: 'Сцена из фильма «Интерстеллар», в которой герой попадает в тессеракт — четырехмерный куб — внутри черной дыры, вызвала немало споров среди любителей науки о том, как должно было выглядеть четырехмерное пространство. Но мало кто знает, что съемки проходили в реально отстроенной декорации, которая поражает сложностью исполнения.',
    img: 'https://placeimg.com/640/480/any?id=5',
    isOverflow: true
  },
  {
    id: '6',
    title: 'new title3',
    subtitle: 'Сцена из фильма «Интерстеллар», в которой герой попадает в тессеракт — четырехмерный куб — внутри черной дыры, вызвала немало споров среди любителей науки о том, как должно было выглядеть четырехмерное пространство. Но мало кто знает, что съемки проходили в реально отстроенной декорации, которая поражает сложностью исполнения.',
  }];
  constructor() {

  }

  public select(id: string) {
    console.log(id);
  }

}
