import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { RabbitMQ } from './common/constantes';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,{
    Transport:Transport.RMQ,
    options:{
      urls:[process.env.AMQP_URL],
      queue:RabbitMQ.PassengerQueue
    }
  });
  await app.listen();
  console.log("escuchando pasajeros")
}
bootstrap();
