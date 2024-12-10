import { IsString } from "class-validator";

export class CreateGyerekDto{
  @IsString()
  nev: string;
  lakcim: string;
  joVolt: boolean;
  jatek: string;
}
