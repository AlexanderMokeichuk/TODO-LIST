export interface Task {
  title: string,
  isActive: boolean,
}
export interface TaskInStore {
  id: string,
  title: string,
  isActive: boolean,
}

export interface TaskState {
  tasks: TaskInStore[],
  loading: boolean,
  error: boolean,
}

export interface ApiTask {
  [id: string]: Task,
}