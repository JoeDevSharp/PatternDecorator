using PatternDecorators
namespace Decorators {
    public class BulletproofVestDecorator: EnemyDecorator {
        public int takeDamage() {
            return this.enemy.takeDamage() / 2 ;
        }
    }
}