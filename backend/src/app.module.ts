import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleModule } from './module/module.module';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [ModuleModule, PersistenceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
