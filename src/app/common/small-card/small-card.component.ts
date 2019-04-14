import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.less']
})
export class SmallCardComponent implements OnInit {
  @Input() picUrl: string = '';
  @Input() name: string = '';
  @Input() copywriter: string = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public routerLink(id: number): void {
    this.router.navigate(['/hot', id])
  }

}
