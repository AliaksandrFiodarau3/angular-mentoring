import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseComponent} from './course.component';
import {By} from "@angular/platform-browser";
import {CommonCourse} from "../../model/course/impl/common-course";

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;

    component.course = new CommonCourse(1, 'Video Course 1. Name tag', '9 Nov, 2018', '1h 28 min',
      'Learn about where you can find course descriptions, what information they include, how they work, ' +
      'and details about various components of a course description. Course descriptions report information about a ' +
      'university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and' +
      ' in course schedules that contain descriptions for all courses offered during a particular semester.');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click delete button expected', () => {
    let deleteButton;
    component.delete.subscribe(d => {
      deleteButton = d;
    });

    component.onDelete();
    expect(deleteButton).toBe(component.course.id);
  });

  it('course id expect', () => {
    const cartTitle = fixture.debugElement.query(By.css('.id')).nativeElement;
    expect(cartTitle.textContent).toContain('1');
  });

  it('course title expect', () => {
    const cartTitle = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    expect(cartTitle.textContent).toContain('Video Course 1. Name tag');
  });

  it('course creation date expect', () => {
    const cartTitle = fixture.debugElement.query(By.css('.creation-date')).nativeElement;
    expect(cartTitle.textContent).toContain('9 Nov, 2018');
  });

  it('course duration expect', () => {
    const cartTitle = fixture.debugElement.query(By.css('.duration')).nativeElement;
    expect(cartTitle.textContent).toContain('1h 28 min');
  });

  it('course description expect', () => {
    const cartTitle = fixture.debugElement.query(By.css('.description')).nativeElement;
    expect(cartTitle.textContent).toContain('Learn about where you can find course descriptions, what information they include, how they work, ' +
      'and details about various components of a course description. Course descriptions report information about a ' +
      'university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and' +
      ' in course schedules that contain descriptions for all courses offered during a particular semester.');
  });

});
