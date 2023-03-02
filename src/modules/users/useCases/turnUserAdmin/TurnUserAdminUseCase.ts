import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const dbUser = this.usersRepository.findById(user_id);

    if (!dbUser) {
      throw new Error("user not found!");
    }

    return this.usersRepository.turnAdmin(dbUser);
  }
}

export { TurnUserAdminUseCase };
