import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from 'angular2-highcharts';
import { PlannerRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NavComponent } from './nav/nav.component';
import { KeysPipe } from './keys.pipe';

import {HotkeyModule} from 'angular2-hotkeys';
import { PrintComponent } from './print/print.component';
import { DownloadComponent } from './download/download.component';
import { ErrorComponent } from './error/error.component';
import { SavedComponent } from './saved/saved.component';
import { SelectComponent } from './select/select.component';
import { TasksComponent } from './tasks/tasks.component';
import { MultiTasksComponent } from './multi-tasks/multi-tasks.component';
import { OneTaskComponent } from './one-task/one-task.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { InformationComponent } from './information/information.component';
import { MenuComponent } from './menu/menu.component';
import { PreviousComponent } from './previous/previous.component';
import { NextComponent } from './next/next.component';
import { HeadingComponent } from './heading/heading.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { CourseNameComponent } from './course-name/course-name.component';
import { CalendarAppComponent } from './calendar-app/calendar-app.component';
import { CustomComponent } from './custom/custom.component';
import { CustomDateComponent } from './custom-date/custom-date.component';
import { ProgressComponent } from './progress/progress.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { AdminComponent } from './admin/admin.component';
import { LiveComponent } from './live/live.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavComponent,
    KeysPipe,
    PrintComponent,
    DownloadComponent,
    ErrorComponent,
    SavedComponent,
    SelectComponent,
    TasksComponent,
    MultiTasksComponent,
    OneTaskComponent,
    InstructionsComponent,
    InformationComponent,
    MenuComponent,
    PreviousComponent,
    NextComponent,
    HeadingComponent,
    TooltipComponent,
    CourseNameComponent,
    CalendarAppComponent,
    CustomComponent,
    CustomDateComponent,
    ProgressComponent,
    ToolbarComponent,
    ContentComponent,
    AdminComponent,
    LiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HotkeyModule,
    NgbModule.forRoot(),
    PlannerRoutingModule,
    JsonpModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
