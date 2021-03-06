import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService, AuthGuard, JwtService, LogService, ApiService } from './services';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    JwtService,
    LogService,
    ApiService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import Core modules in the AppModule only.');
    }
  }
}
