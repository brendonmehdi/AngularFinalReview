import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentlistitemComponent } from './contentlistitem.component';

describe('ContentlistitemComponent', () => {
  let component: ContentlistitemComponent;
  let fixture: ComponentFixture<ContentlistitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentlistitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentlistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
