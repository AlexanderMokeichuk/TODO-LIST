export interface Task {
  title: string,
  iaActive: boolean,
}

export interface ApiTask {
  [id: string]: Task,
}