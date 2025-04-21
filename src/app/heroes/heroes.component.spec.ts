import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HEROES } from '../mock-heroes';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesComponent], // Because it's a standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should display list of heroes', () => {
    const heroButtons = compiled.querySelectorAll('ul.heroes li button');
    expect(heroButtons.length).toBe(HEROES.length);
  });

  it('should display selected hero details when clicked', () => {
    const heroButtons = compiled.querySelectorAll('ul.heroes li button');
    (heroButtons[0] as HTMLButtonElement).click();
    fixture.detectChanges();

    const detailSection = compiled.querySelector('div');
    expect(detailSection?.textContent).toContain(HEROES[0].name.toUpperCase());
  });

  it('should update hero name in input box', () => {
    component.onSelect(HEROES[1]);
    fixture.detectChanges();

    const input: HTMLInputElement = compiled.querySelector('#hero-name')!;
    input.value = 'New Hero';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.selectedHero?.name).toBe('New Hero');
  });
});
