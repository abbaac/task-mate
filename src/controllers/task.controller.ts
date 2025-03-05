import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

@Controller('tasks')
export class TaskController {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  @Get()
  async findAllTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  @Get(':id')
  async findTaskById(@Param('id') id: any): Promise<Task | null> {
    return await this.taskRepository.findOneById(id);
  }

  @Post()
  async createTask(@Body() task: Task): Promise<Task> {
    return await this.taskRepository.save(task);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: any,
    @Body() task: Task,
  ): Promise<Task | null> {
    await this.taskRepository.update(id, task);
    return await this.taskRepository.findOneById(id);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
