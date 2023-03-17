import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PASSENGER } from '../common/models/models';
import { PassengerDTO } from './dto/passenger.dto';
import { IPassenger } from '../common/interfaces/passenger.intereface';


@Injectable()
export class PassengerService {
    constructor(@InjectModel(PASSENGER.name) private readonly pasajeromodelo:Model<IPassenger>){}

    async insertar (passengerDTO: PassengerDTO):Promise<IPassenger>{
        const nuevoUsuario = new this.pasajeromodelo({...passengerDTO});
        return nuevoUsuario.save();
    }
    async todos():Promise<IPassenger[]>{
        return await this.pasajeromodelo.find();
    }
    async uno(id:string):Promise<IPassenger>{
        return await this.pasajeromodelo.findById(id);
    }
    async actualizar(id: string, passengerDTO:PassengerDTO):Promise<IPassenger>{
        const nuevoUsuario = new this.pasajeromodelo({...passengerDTO});
        return await this.pasajeromodelo.findByIdAndUpdate(id, passengerDTO, {new:true});
    }
    async eliminar(id:string){
        await this.pasajeromodelo.findByIdAndDelete(id);
        return {status: HttpStatus.OK, msg:'Se eliminó correctamente'};
    }
}
