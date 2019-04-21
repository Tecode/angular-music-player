import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { LoadSongListData } from '../../../store';
import { HotState, SongListDetail } from '../../../store/reducers/hot.reducer';
import { Position } from '../../common/scroll/scroll.component';


@Component({
  selector: 'song-list-detail',
  templateUrl: './song-list-detail.component.html',
  styleUrls: ['./song-list-detail.component.less'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)',
      })),
      state('out', style({
        opacity: 0,
        transform: 'translateY(100%)',
      })),
      transition('* => *', [
        animate('300ms ease-in-out')
      ]),
    ])
  ]
})
export class SongListDetailComponent implements OnInit {
  public detailStore$: Observable<HotState>;
  public scrollTop: number = 260;
  public songDetailList: SongListDetail = {
    coverImgUrl: '',
    name: '',
    listData: []
  };
  public isShow:boolean = true;

  constructor(
    public router: Router,
    private store: Store<{ hotStore: HotState }>,
    private activeRouter: ActivatedRoute
  ) {
    this.detailStore$ = store.pipe(select('hotStore'));
  }

  ngOnInit() {
    const songId: number = Number(this.activeRouter.snapshot.paramMap.get('id'));
    this.store.dispatch(new LoadSongListData(songId));
    this.detailStore$.subscribe(data => {
      this.songDetailList = data.songListDetail;
    })
  }


  public goBack(arg: boolean): void {
    if (arg) {
      if (!this.isShow) {
        this.router.navigate(['/hot']);
      }
    } else {
      this.isShow = false;
    }
  }

  public handlerScroll(position: Position) {
    if (this.scrollTop > 260) {
      this.scrollTop = 260;
      return;
    }
    if (this.scrollTop < 38) {
      this.scrollTop = 38;
      return;
    }
    this.scrollTop = this.scrollTop + position.y;
    console.log(position);
  }
}
