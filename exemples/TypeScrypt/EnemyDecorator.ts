import { Enemy } from "./interfaces/Enemy";

export default abstract class EnemyDecorator implements Enemy {
    protected enemy;
    
    constructor(enemy: Enemy) {
        this.enemy = enemy
    }
    
    life: number;

    takeDamage(): number {
        return this.takeDamage();
    }

    attackDamage(): number {
        return this.attackDamage();
    }
}