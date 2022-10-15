import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEpisodeComponent } from './new-episode.component';

describe('NewEpisodeComponent', () => {
  let component: NewEpisodeComponent;
  let fixture: ComponentFixture<NewEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEpisodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
