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
import { HotStateData, SongListDetail } from '../../../store/reducers/hot.reducer';


@Component({
  selector: 'song-list-detail',
  templateUrl: './song-list-detail.component.html',
  styleUrls: ['./song-list-detail.component.less'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        style({ transform: 'translateY(0)' }),
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class SongListDetailComponent implements OnInit {
  public detailStore$: Observable<HotStateData>;
  public songDetailList: SongListDetail = {
    coverImgUrl: '',
    name: '',
    listData: []
  };

  constructor(
    public router: Router,
    private store: Store<{ hotStore: HotStateData }>,
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

  public goBack(): void {
    this.router.navigate(['/hot']);
  }

  public scrollFun(pos: any) {
    console.log(pos);
  }
}
