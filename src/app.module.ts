import { Module } from '@nestjs/common';
import { FixModule } from './Fix/fix.module';

@Module({
  imports: [
    FixModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
