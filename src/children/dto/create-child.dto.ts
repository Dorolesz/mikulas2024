import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateChildDto {
  @IsString()
  @IsNotEmpty()
  nev: string;

  @IsString()
  @IsNotEmpty()
  lakcim: string;

  @IsBoolean()
  @IsNotEmpty()
  joVolt: boolean;

  @IsString()
  @IsNotEmpty()
  jatek: string;
}
