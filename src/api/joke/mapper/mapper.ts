import { Joke } from 'src/model/joke';
import { JokeResponseDTO } from '../dto/response';

export const FromJokeResponseDtoToJokeModel = (
  source: JokeResponseDTO
): Joke => {
  return {
    id: source.id,
    type: source.type,
    setup: source.setup,
    punchline: source.punchline.toUpperCase() //Esempio operazione su mapper
  };
};
