import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public cardLists = [
    {
      id: '1',
      name: 'BackLog',
      cards: [
        {
          id: '1',
          name: 'task1',
          description: 'task1 description',
          dueDate: '1.10.2019',
          assignee: false
        },
        {
          id: '2',
          name: 'task2',
          description: 'task2 description',
          dueDate: '2.10.2019',
          assignee: false
        },
        {
          id: '3',
          name: 'task3',
          description: 'task3 description',
          dueDate: '15.10.2019',
          assignee: false
        }
      ]
    },
    {
      id: '2',
      name: 'Done',
      cards: [
        {
          id: '4',
          name: 'task4',
          description: 'task4 description',
          dueDate: '44.10.2019',
          assignee: false
        },
        {
          id: '5',
          name: 'task5',
          description: 'task5 description',
          dueDate: '55.10.2019',
          assignee: false
        },
        {
          id: '6',
          name: 'task6',
          description: 'task6 description',
          dueDate: '66.10.2019',
          assignee: false
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
