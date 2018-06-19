import { JsonController, Get, Post, Param, Body, NotFoundError } from 'routing-controllers'
import Database  from './entity'

@JsonController()
export default class DatabaseController {

  @Get('/databases')
  async allBatches(){
    const databases = await Database.find()
    if (!databases) throw new NotFoundError('Sorry but that table does not exist')
    return databases
  }

  @Get('/databases/:id([0-9]+)')
  getDatbase(
    @Param('id') id: number
  ) {
    return Database.findOne(id)
  }

  @Post('/databases')
  async createDatabase(
    @Body() database: Database
  ) {
    const entity = await database.save()
    return { entity }
  }
}