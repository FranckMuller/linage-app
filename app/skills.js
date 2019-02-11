// base class
class Skill {
    static get typeActive() { return 'active'};
    static get typeBuff() { return 'buff'};
    static get typeDebuff() { return 'debuff'};

    constructor(name, type) {
        this.name = name;
        this.type = type;

        this.cooldown = null;
    }

    validateType() {
        // todo: implement me
    }
}


class BuffSkill extends Skill {

}

class TargetBasedSkill extends Skill{

}

class AOESkill extends Skill{

}


class RageSkill extends BuffSkill {
    constructor() {
        super('rage', Skill.typeBuff);

        this.effectDuration = 40;
        this.cooldown = 30;
    }


}