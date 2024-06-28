import { Module } from '@nestjs/common';

@Module({
    // imports: [
    //     ConfigModule.forRoot({
    //       isGlobal: true,
    //     }),
    //     TypeOrmModule.forRootAsync({
    //       imports: [ConfigModule],
    //       inject: [ConfigService],
    //       useFactory: (configService: ConfigService) => ({
    //         type: 'mssql',
    //         host: configService.get('DB_HOST'),
    //         port: parseInt(configService.get('DB_PORT'), 10) || 1433,
    //         username: configService.get('DB_USERNAME'),
    //         password: configService.get('DB_PASSWORD'),
    //         database: configService.get('DB_NAME'),
    //         entities: [__dirname + '/../**/*.entity.{js,ts}'],
    //         synchronize: true, // Set to false in production
    //       }),
    //     }),
    //   ],
})
export class PersistenceModule {}
