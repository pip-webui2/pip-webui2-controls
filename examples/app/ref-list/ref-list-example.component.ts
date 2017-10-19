import { Component } from '@angular/core';


@Component({
  selector: 'ref-list-example',
  templateUrl: './ref-list-example.component.html',
  styleUrls: ['./ref-list-example.component.scss']
})
export class RefListExampleComponent {
  public  typesOfShoes: any[] = [{
    title: "new title",
    subtitle: "new subtitle",
    img: "https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-1/c202.126.334.334/s160x160/21432939_1577920175601354_6854116912021829924_n.jpg?oh=9979e331b964c2593983a1ff7633ed09&oe=5A6FD064",
    subtitleIcon: "face",
    textBold: "text bold",
    text: "text",
    tag: "tag"
  },
  {
    title: "new title",
    subtitle: "new subtitle",
    img: "https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-1/c202.126.334.334/s160x160/21432939_1577920175601354_6854116912021829924_n.jpg?oh=9979e331b964c2593983a1ff7633ed09&oe=5A6FD064",
    subtitleIcon: "face",
    text: "text",
    tag: "tag"
  },
  {
    title: "new title2",
    subtitle: "new subtitle2",
    img: "https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-1/p160x160/12974300_773161139503097_1314808927226864548_n.jpg?oh=a5810decc422069eff2a4e5eae0e4183&oe=5A742045",
    textBold: "text bold2",
    text: "text2",
    tag: "tag2"
  }, 
  {
    title: "new title2",
    subtitle: "Сцена из фильма «Интерстеллар», в которой герой попадает в тессеракт — четырехмерный куб — внутри черной дыры, вызвала немало споров среди любителей науки о том, как должно было выглядеть четырехмерное пространство. Но мало кто знает, что съемки проходили в реально отстроенной декорации, которая поражает сложностью исполнения.",
    img: "https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-1/p160x160/12974300_773161139503097_1314808927226864548_n.jpg?oh=a5810decc422069eff2a4e5eae0e4183&oe=5A742045",
    textBold: "Освобождать на такой срок настоящее шоссе было слишком дорого и проблематично, так что братья Вачовски решили не мелочиться и построили трассу длиной почти 2,5 км. ",
    text: "Сцена из фильма «Интерстеллар», в которой герой попадает в тессеракт — четырехмерный куб — внутри черной дыры, вызвала немало споров среди любителей науки о том, как должно было выглядеть четырехмерное пространство. Но мало кто знает, что съемки проходили в реально отстроенной декорации, которая поражает сложностью исполнения.",
    tag: "tag2"
  }, 
  {
    title: "new title3",
    subtitle: "Сцена из фильма «Интерстеллар», в которой герой попадает в тессеракт — четырехмерный куб — внутри черной дыры, вызвала немало споров среди любителей науки о том, как должно было выглядеть четырехмерное пространство. Но мало кто знает, что съемки проходили в реально отстроенной декорации, которая поражает сложностью исполнения.",
    textBold: "Освобождать на такой срок настоящее шоссе было слишком дорого и проблематично, так что братья Вачовски решили не мелочиться и построили трассу длиной почти 2,5 км. ",
    text: "Сцена из фильма «Интерстеллар», в которой герой попадает в тессеракт — четырехмерный куб — внутри черной дыры, вызвала немало споров среди любителей науки о том, как должно было выглядеть четырехмерное пространство. Но мало кто знает, что съемки проходили в реально отстроенной декорации, которая поражает сложностью исполнения.",
    tag: "tag2"
  }]
  constructor() {
  
  }
}
