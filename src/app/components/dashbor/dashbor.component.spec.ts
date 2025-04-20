import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashborComponent } from './dashbor.component';

describe('DashborComponent', () => {
  let component: DashborComponent;
  let fixture: ComponentFixture<DashborComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashborComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
