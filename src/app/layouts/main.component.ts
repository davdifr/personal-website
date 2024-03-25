import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../template/header/header.component';

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `<template-header /> <router-outlet></router-outlet>`,
})
export class MainLayoutComponent {}
