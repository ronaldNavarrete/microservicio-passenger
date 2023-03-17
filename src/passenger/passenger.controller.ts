import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PassengerMSG } from 'src/common/constantes';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';

@Controller()
export class PassengerController {
    constructor(private readonly usuarioServicio:PassengerService){
    }
    @MessagePattern(PassengerMSG.INSERTAR)
    insertar(@Payload() usuarioDTO:PassengerDTO){
        return this.usuarioServicio.insertar(usuarioDTO);
    }
    @MessagePattern(PassengerMSG.TODOS)
    todos()
    {
        return this.usuarioServicio.todos();
    }
    @MessagePattern(PassengerMSG.UNO)
    uno(@Payload() id:string){
        return this.usuarioServicio.uno(id);
    }
    @MessagePattern(PassengerMSG.ACTUALIZAR)
    actualizar(@Payload() paylod:any){
        return this.usuarioServicio.actualizar(paylod.id, paylod.usuarioDTO);
    }
   @MessagePattern(PassengerMSG.ELIMINAR)
    eliminar(@Payload() id:string){
        return this.usuarioServicio.eliminar(id);
    }
}
