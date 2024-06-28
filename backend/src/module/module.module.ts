import { Module } from '@nestjs/common';
import { PatientModule } from './patient/patient.module';
import { ProfessionalModule } from './professional/professional.module';
import { AppointModule } from './appoint/appoint.module';
import { RemindersModule } from './reminders/reminders.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [PatientModule, ProfessionalModule, AppointModule, RemindersModule, RolesModule]
})
export class ModuleModule {}
