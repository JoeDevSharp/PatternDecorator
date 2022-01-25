import EnemyDecorator from "../EnemyDecorator";

export class WeaponDecorator extends EnemyDecorator {
    attackDamage(): number {
        return this.enemy.attackDamage() * 10;
    }
}