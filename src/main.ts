import { HttpClientModule } from "@angular/common/http";
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from "@angular/core";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...appConfig.providers,
      importProvidersFrom(HttpClientModule)
    ]
})
  .catch((err) => console.error(err));
