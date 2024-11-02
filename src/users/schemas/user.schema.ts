import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  age: number;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  phone: string;
  @Prop({ required: true })
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
