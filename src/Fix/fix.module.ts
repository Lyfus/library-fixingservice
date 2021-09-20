import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { FixController } from './fix.controller';
import { FixService } from './fix.service';

@Module({
  imports: [
    BullModule.forRoot({
        redis: {
          host: 'localhost',
          port: 6379
        }
      }),
      BullModule.registerQueue({
        name: 'book',
        redis: {
          port: 6379,
        },
    }),
    BullModule.registerQueue({
        name: 'fixing',
        redis: {
            port: 6379,
        },
    })
  ],
  controllers: [FixController],
  providers: [ FixService ],
})
export class FixModule {}