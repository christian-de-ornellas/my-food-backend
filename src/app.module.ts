import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://myfood:e77697373@cluster0.0zst3lg.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
  ],
})
export class AppModule {}
