class Plane {
    static alive() {
        console.log('alive');
    }
    constructor(name, blood) {
        this.name = name || '普通飞机';
        this.blood = blood;
    }
    fly() {
        console.log('fly');
    }
} 
class AttackPlane extends Plane {
    constructor(name, blood) {
        super(name, blood);
        this.logo = 'jellow';
    }
    dan() {
        console.log('biubiubiu');
    }
}