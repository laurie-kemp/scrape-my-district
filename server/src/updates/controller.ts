import { JsonController, Get, Post, HttpCode, Body } from "routing-controllers";
import Update from "./entity";

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
  @Get("/updates")
  allUpdates() {
    return Update.find();
  }

  //@Authorized()
  @Post("/updates")
  @HttpCode(201)
  async createUpdate(@Body() update: Update) {
    await update.save();
    const updates = await Update.find();
    return updates;
  }
}
// http post :4000/users firstName="Laurie" lastName="Kemp" email="laurie.kemp@scaleupnation.com" password="Laurie999"
