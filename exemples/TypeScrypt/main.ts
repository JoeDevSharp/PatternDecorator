import BaseEnemy from "./BaseEnemy";
import { BulletproofVestDecorator } from "./decorators/BulletproofVestDecorator";
import { WeaponDecorator } from "./decorators/WeaponDecorator";

const enemy = new BaseEnemy();
const enemyWhitWeapon = new WeaponDecorator(enemy);
const enemyWhitWeaponAndBulleproofVest = new BulletproofVestDecorator(enemyWhitWeapon);
