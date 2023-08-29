import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElewaWebsiteFooterComponent } from './elewa-website-footer.component';

describe('ElewaWebsiteFooterComponent', () => {
  let component: ElewaWebsiteFooterComponent;
  let fixture: ComponentFixture<ElewaWebsiteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaWebsiteFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaWebsiteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
