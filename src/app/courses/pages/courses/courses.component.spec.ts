import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesComponent} from './courses.component';
import {CoursesSearchComponent} from '../../components/courses-search/courses-search.component';
import {CourseComponent} from '../../components/course/course.component';
import {OrderByPipe} from "../../../shared/pipes/order-by/order-by.pipe";
import {DurationConverterPipe} from "../../../shared/pipes/duration/duration-converter.pipe";
import {ChangePlateBorderDirective} from "../../../shared/derictives/change-plate-border.directive";

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        CoursesSearchComponent,
        CourseComponent,
        OrderByPipe,
        DurationConverterPipe,
        ChangePlateBorderDirective
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get courses not null', () => {
    expect(component.courses).not.toBeNull();
  });

});
