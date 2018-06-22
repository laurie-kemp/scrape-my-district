import { JsonController, Get, Authorized } from 'routing-controllers'
import Update from './entity';

@JsonController()
export default class UpdateController {

//   @Authorized()
//   @Get('/updates/:id([0-9]+)')
//   getUser(
//     @Param('id') id: number
//   ) {
//     return Update.findOne(id)
//   }

//   @Authorized()
  @Get('/updates')
  allUsers() {
    return Update.find()
  }
}

// http post :4000/users firstName="Laurie" lastName="Kemp" email="laurie.kemp@scaleupnation.com" password="Laurie999"
