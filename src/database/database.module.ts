import { Module, Global } from '@nestjs/common';

const API_KEY = '123456';
const API_KEY_PROD = 'PROD121212121212';

//esta etiqueta permite que el modulo quede global sin necesidad de importarlo
@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
