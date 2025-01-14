import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {DropListModelSource, Task, TaskState, TaskWithIssueData, TaskWithSubTasks} from '../task.model';
import {IssueData} from '../../issue/issue';
import {RoundTimeOption} from '../../project/project.model';

export enum TaskActionTypes {
  LoadTaskState = '[Task] Load Task State',
  SetCurrentTask = '[Task] SetCurrentTask',
  UnsetCurrentTask = '[Task] UnsetCurrentTask',

  // Task Actions
  AddTask = '[Task][Issue] Add Task',
  UpdateTaskUi = '[Task] Update Task Ui',
  ToggleTaskShowSubTasks = '[Task] Toggle Show Sub Tasks',
  UpdateTask = '[Task] Update Task',
  UpdateTasks = '[Task] Update Tasks',
  DeleteTask = '[Task] Delete Task',
  UndoDeleteTask = '[Task] Undo Delete Task',
  Move = '[Task] Move task',
  MoveUp = '[Task] Move up',
  MoveDown = '[Task] Move down',
  AddTimeSpent = '[Task] Add time spent',
  RemoveTimeSpent = '[Task] Remove time spent',

  // Reminders
  AddTaskReminder = '[Task] Add reminder',
  UpdateTaskReminder = '[Task] Update reminder',
  RemoveTaskReminder = '[Task] Remove reminder',

  // Sub Task Actions
  AddSubTask = '[Task] Add SubTask',

  // Other
  StartFirstStartable = '[Task] Start first startable Task',
  RestoreTask = '[Task] Restore Task',
  FocusTask = '[Task] Focus Task',
  FocusLastActiveTask = '[Task] Focus last active Task',
  MoveToBacklog = '[Task] Move to backlog',
  MoveToToday = '[Task] Move to today',
  MoveToArchive = '[Task] Move to archive',
  MoveToOtherProject = '[Task] Move tasks to other project',
  ToggleStart = '[Task] Toggle start',
  RoundTimeSpentForDay = '[Task] RoundTimeSpentForDay',
}

export class LoadTaskState implements Action {
  readonly type = TaskActionTypes.LoadTaskState;

  constructor(public payload: { state: TaskState }) {
  }
}

export class SetCurrentTask implements Action {
  readonly type = TaskActionTypes.SetCurrentTask;

  constructor(public payload: string) {
  }
}

export class UnsetCurrentTask implements Action {
  readonly type = TaskActionTypes.UnsetCurrentTask;
}

export class AddTask implements Action {
  readonly type = TaskActionTypes.AddTask;

  constructor(public payload: {
    task: Task, issue?: IssueData, isAddToBacklog: boolean, isAddToBottom: boolean,
  }) {
  }
}

export class UpdateTask implements Action {
  readonly type = TaskActionTypes.UpdateTask;

  constructor(public payload: { task: Update<Task> }) {
  }
}

export class UpdateTaskUi implements Action {
  readonly type = TaskActionTypes.UpdateTaskUi;

  constructor(public payload: { task: Update<Task> }) {
  }
}

export class ToggleTaskShowSubTasks implements Action {
  readonly type = TaskActionTypes.ToggleTaskShowSubTasks;

  constructor(public payload: { taskId: string, isShowLess: boolean, isEndless: boolean }) {
  }
}

export class UpdateTasks implements Action {
  readonly type = TaskActionTypes.UpdateTasks;

  constructor(public payload: { tasks: Update<Task>[] }) {
  }
}

export class DeleteTask implements Action {
  readonly type = TaskActionTypes.DeleteTask;

  constructor(public payload: { task: TaskWithSubTasks }) {
  }
}

export class UndoDeleteTask implements Action {
  readonly type = TaskActionTypes.UndoDeleteTask;
}

export class Move implements Action {
  readonly type = TaskActionTypes.Move;

  constructor(public payload: {
    taskId: string,
    sourceModelId: DropListModelSource,
    targetModelId: DropListModelSource,
    newOrderedIds: string[]
  }) {
  }
}

export class MoveUp implements Action {
  readonly type = TaskActionTypes.MoveUp;

  constructor(public payload: { id: string }) {
  }
}

export class MoveDown implements Action {
  readonly type = TaskActionTypes.MoveDown;

  constructor(public payload: { id: string }) {
  }
}

export class AddTimeSpent implements Action {
  readonly type = TaskActionTypes.AddTimeSpent;

  constructor(public payload: { id: string, date: string, duration: number }) {
  }
}

export class RemoveTimeSpent implements Action {
  readonly type = TaskActionTypes.RemoveTimeSpent;

  constructor(public payload: { id: string, date: string, duration: number }) {
  }
}

// Reminder Actions
export class AddTaskReminder implements Action {
  readonly type = TaskActionTypes.AddTaskReminder;

  constructor(public payload: { id: string, title: string, remindAt: number, isMoveToBacklog: boolean }) {
  }
}

export class UpdateTaskReminder implements Action {
  readonly type = TaskActionTypes.UpdateTaskReminder;

  constructor(public payload: { id: string, title: string, reminderId: string, remindAt: number }) {
  }
}

export class RemoveTaskReminder implements Action {
  readonly type = TaskActionTypes.RemoveTaskReminder;

  constructor(public payload: { id: string, reminderId: string }) {
  }
}


export class StartFirstStartable implements Action {
  readonly type = TaskActionTypes.StartFirstStartable;

  constructor(public payload: { isStartIfHasCurrent: boolean }) {
  }
}

export class RestoreTask implements Action {
  readonly type = TaskActionTypes.RestoreTask;

  constructor(public payload: { task: TaskWithIssueData, subTasks: TaskWithIssueData[] }) {
  }
}

export class FocusTask implements Action {
  readonly type = TaskActionTypes.FocusTask;

  constructor(public payload: { id: string }) {
  }
}

export class FocusLastActiveTask implements Action {
  readonly type = TaskActionTypes.FocusLastActiveTask;
}

export class AddSubTask implements Action {
  readonly type = TaskActionTypes.AddSubTask;

  constructor(public payload: { task: Task, parentId: string }) {
  }
}

export class MoveToBacklog implements Action {
  readonly type = TaskActionTypes.MoveToBacklog;

  constructor(public payload: { id: string }) {
  }
}

export class MoveToToday implements Action {
  readonly type = TaskActionTypes.MoveToToday;

  constructor(public payload: { id: string, isMoveToTop: boolean }) {
  }
}

export class MoveToArchive implements Action {
  readonly type = TaskActionTypes.MoveToArchive;

  constructor(public payload: { tasks: TaskWithSubTasks[] }) {
  }
}

export class MoveToOtherProject implements Action {
  readonly type = TaskActionTypes.MoveToOtherProject;

  constructor(public payload: { tasks: TaskWithSubTasks[]; projectId: string; }) {
  }
}

export class ToggleStart implements Action {
  readonly type = TaskActionTypes.ToggleStart;
}

export class RoundTimeSpentForDay implements Action {
  readonly type = TaskActionTypes.RoundTimeSpentForDay;

  constructor(public payload: { day: string, roundTo: RoundTimeOption, isRoundUp: boolean }) {
  }
}

export type TaskActions
  = LoadTaskState
  | SetCurrentTask
  | UnsetCurrentTask
  | AddTask
  | UpdateTaskUi
  | ToggleTaskShowSubTasks
  | UpdateTask
  | UpdateTasks
  | DeleteTask
  | UndoDeleteTask
  | Move
  | MoveUp
  | MoveDown
  | AddTimeSpent
  | RemoveTimeSpent
  | AddTaskReminder
  | UpdateTaskReminder
  | RemoveTaskReminder
  | StartFirstStartable
  | RestoreTask
  | FocusTask
  | FocusLastActiveTask
  | AddSubTask
  | MoveToBacklog
  | MoveToToday
  | ToggleStart
  | RoundTimeSpentForDay
  | MoveToOtherProject
  | MoveToArchive;

