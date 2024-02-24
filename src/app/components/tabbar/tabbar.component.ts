import { Component } from '@angular/core';

@Component({
  selector: 'tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent {
  selectedTab: string = 'home';

  selectTab(tab: string): void {
    this.selectedTab = tab;
    console.log(this.selectedTab);
  }
}
