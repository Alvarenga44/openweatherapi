import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export class FindWeatherLocationDTO {
  @IsString()
  @MinLength(1, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  city: string;
}
