import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, RouterOutlet, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-practice');

  protected readonly cards = signal([
    { image: '/images/Strategy & Direction.svg', title: 'Strategy & Direction', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
    { image: '/images/Branding & Logo.svg', title: 'Branding & Logo', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
    { image: '/images/UI & UX Design.svg', title: 'UI & UX Design', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
    { image: '/images/Webflow Development.svg', title: 'Webflow development', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' }
  ]);
}
