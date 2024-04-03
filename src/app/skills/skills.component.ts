import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skills = [
    'angular',
    'typescript',
    'python',
    'kafka',
    'archer',
    'next.js',
    'react',
    'dotnet',
    'angular',
    'typescript',
    'python',
    'css',
    'flask',
    'django',
    'javascript',
    'linux',
  ];
  skillPositions: string[][] = [];
  currentlyDragging: number | undefined;
  mouseX: number | undefined;
  mouseY: number | undefined;

  ngOnInit(): void {
    for (let i = 0; i < this.skills.length; i++) {
      let pos: string[] = [
        i * (90 / this.skills.length) + '%',
        ((i + 1) % 3) * 33  + '%',
        this.getRandomRotation(),
      ];
      this.skillPositions.push(pos);
    }
  }

  getRandomRotation() {
    let randomVal = Math.random() * 30 - 15;
    return `rotate(${randomVal}deg)`;
  }

  startDraggin(i: number) {
    this.currentlyDragging = i;
    console.log('Start Dragging');
  }

  mouseMove(e: MouseEvent) {
    if (this.currentlyDragging == undefined) {
      return;
    }
    this.skillPositions[this.currentlyDragging][0] = e.pageX - 70 + 'px';
    this.skillPositions[this.currentlyDragging][1] = e.pageY - 30 + 'px';
    console.log('Mouse Moving', e.pageX);
    // this.mouseX = e.pageX - 70;
    // this.mouseY = e.pageY - 30;
  }
  stopDragging() {
    this.currentlyDragging = undefined;
  }
}
