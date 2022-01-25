export interface Enemy {
    life: number;
    takeDamage(): number;
    attackDamage(): number;
}