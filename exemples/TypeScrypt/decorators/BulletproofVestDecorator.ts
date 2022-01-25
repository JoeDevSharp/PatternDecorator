import EnemyDecorator from "../EnemyDecorator";

export class BulletproofVestDecorator extends EnemyDecorator {
    takeDamage(): number {
        return this.enemy,this.takeDamage() / 2;
    }
}