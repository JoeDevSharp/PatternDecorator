using Interfaces;

namespace PatternDecorators {
    class BaseEnemy: IEnemy {
        public int life = 100;

        public int takeDamage() {
            return 10;
        }
        public int attackDamage() {
            return 4;
        }
    }
} 