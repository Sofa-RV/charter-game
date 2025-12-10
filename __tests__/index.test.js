const { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } = require('../src/index.js');

describe('Character classes', () => {
  test('Bowman creates with correct stats', () => {
    const bowman = new Bowman('Rob');
    expect(bowman).toEqual({
      name: 'Rob', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25
    });
  });

  test('Swordsman creates with correct stats', () => {
    const swordsman = new Swordsman('Rob');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('Magician creates with correct stats', () => {
    const magician = new Magician('Rob');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('Daemon creates with correct stats', () => {
    const daemon = new Daemon('Rob');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('Undead creates with correct stats', () => {
    const undead = new Undead('Rob');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('Zombie creates with correct stats', () => {
    const zombie = new Zombie('Rob');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });

  test('short name throws error', () => {
    expect(() => new Bowman('R')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  test('long name throws error', () => {
    expect(() => new Bowman('R'.repeat(11))).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  test('invalid type throws error', () => {
    expect(() => new Character('Rob', 'Elf')).toThrow('Тип должен быть одним из:');
  });

  test('levelUp increases stats correctly', () => {
    const char = new Swordsman('Rob');
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.attack).toBe(48);
    expect(char.defence).toBe(12);
    expect(char.health).toBe(100);
  });

  test('levelUp dead character throws error', () => {
    const char = new Magician('Rob');
    char.damage(1000);
    expect(() => char.levelUp()).toThrow('Нельзя повысить левел умершего');
  });

test('damage calculates correctly', () => {
  const char = new Bowman('Rob');
  char.damage(100);
  // 100 урона * (1 - 25/100 защиты) = 100 * 0.75 = 75 урона
  // 100 здоровье - 75 урона = 25 оставшихся
  expect(char.health).toBe(25);  
});


  test('health does not go below 0', () => {
    const char = new Zombie('Rob');
    char.damage(1000);
    expect(char.health).toBe(0);
  });
});
