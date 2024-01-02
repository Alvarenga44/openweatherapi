import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class FindWeatherDTO {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid start_date.' })
  start_date: string;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid end_date.' })
  end_date: string;
}
