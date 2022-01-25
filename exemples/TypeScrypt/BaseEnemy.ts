import { Enemy } from "./interfaces/Enemy";

export default class BaseEnemy implements Enemy {
    life = 100;
    takeDamage(): number {
        return 10
    }
    attackDamage(): number {
        return 4;
    }
}