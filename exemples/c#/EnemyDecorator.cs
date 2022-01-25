using Interfaces;
namespace PatternDecorators {
    abstract class EnemyDecorator: IEnemy {
        protected IEnemy enemy;

        public EnemyDecorator (IEnemy enemy) {
            this.enemy = enemy;
        }

        public int life;

        public int takeDamage(){
            return this.enemy.takeDamage();
        }

        public int attackDamage() {
            return this.enemy.attackDamage();
        }

    }
}