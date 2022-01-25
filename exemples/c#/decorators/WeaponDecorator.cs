using PatternDecorators
namespace Decorators {
    public class WeaponDecorator: EnemyDecorator {
        public int attackDamage() {
            return this.enemy.attackDamage() * 10;
        }
    }
}